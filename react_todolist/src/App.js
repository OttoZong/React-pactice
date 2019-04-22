import React from 'react';
import _ from 'lodash';
import TodoCreate from './todo-create.js';
import TodoList from './todo-list';

//
const todos = [
  {
    task: 'Make a React',
    isCompleted:false
  },
  {
    task:'Go to buy apple',
    isCompleted:false
  }
];


export default class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      todos: todos
    }
  }

  render(){
    return (
      <div>
        <h1>React Todo-list</h1>
        <div className="td-list-con">

          <TodoCreate
            todos={ this.state.todos }
            createTask= { this.createTask.bind(this) }
            />

          <TodoList
            todos={ this.state.todos }
            saveTask={ this.saveTask.bind(this) }
            deleteTask={ this.deleteTask.bind(this) }
            toggleTask={ this.toggleTask.bind(this) }
            />


        </div>
      </div>
    )
  }

  //創建任務
  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
  // 删除任务

      deleteTask(taskToDelete) {
          _.remove(this.state.todos, todo => todo.task === taskToDelete);
          this.setState({ todos: this.state.todos });
      }

      // 保存任务

      saveTask(oldTask, newTask) {
          const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
          foundTodo.task = newTask;
          this.setState({ todos: this.state.todos });
      }

      // 切换任务完成状态

      toggleTask(task) {
          const foundTodo = _.find(this.state.todos, todo => todo.task === task);
          foundTodo.isCompleted = !foundTodo.isCompleted;
          this.setState({ todos: this.state.todos });
      }
}
