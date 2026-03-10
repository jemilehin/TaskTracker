import TaskItem from "@/components/TaskItem";
import Button from "@/components/ui/button";
import SafeAreaViewContainer from "@/components/ui/SafeAreaView";
import { TaskInterface } from "@/types/Task";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CreateModalTask from "@/components/CreateTaskModal";
import { useAsyncStorage } from "@/hooks/useAsyncStorage";
import PagerView from "react-native-pager-view";
import React from "react";
import NaviagtionHeader from "@/components/Nav";
import { TASKSTORAGEKEY } from "@/constants/asyncConstant";

const pageTabs = ["all", "active", "complete"];
export default function HomeScreen() {
  const [isShowModal, setShowModal] = useState(false);
  const [currentTabPage,setCurrentTabPage] = useState<number>(0)
  const { data, newdata } = useAsyncStorage();
  console.log('data', data.val.length)

  useEffect(() => {
    data.val.push(newdata)
    console.log('updated',newdata)
  }, [newdata])

  const renderTaskItem = useCallback(
    ({ item, index }: { item: TaskInterface; index: number }) => {
      return (
        <TaskItem
          title={item.title}
          description={item.description}
          index={index}
          status={item.status}
          page={currentTabPage+1}
        />
      );
    },
    []
  );
  return (
    <SafeAreaViewContainer>
      <NaviagtionHeader screenTitle={currentTabPage == 0 ? "Task" : currentTabPage > 0 && currentTabPage < 2 ? 'Active Task' : 'Completed Task'} />
      <PagerView pageMargin={10} style={{flex: 1}} onPageSelected={(event) => {
        setCurrentTabPage(event.nativeEvent.position)
        }}>
        <View key={1} style={styles.container}>
          <FlatList data={data?.val} renderItem={renderTaskItem} />

          <Button
            onPressed={() => setShowModal(true)}
            customStyle={styles.addButton}
          >
            <MaterialIcons name="add-task" size={24} color="white" />
          </Button>
        </View>
        <View key={2}>
          <FlatList data={data?.val?.filter((x:TaskInterface) => x?.status == pageTabs[1])} renderItem={renderTaskItem} />
        </View>
        <View key={3}>
          <FlatList data={data?.val?.filter((x:TaskInterface) => x?.status == pageTabs[2])} renderItem={renderTaskItem} />
        </View>
      </PagerView>

      <CreateModalTask isShow={isShowModal} setShowModal={setShowModal} />
    </SafeAreaViewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  addButton: {
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "black",
    borderRadius: 50,

  },
});
