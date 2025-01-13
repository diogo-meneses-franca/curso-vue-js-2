<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TasksProgress :progress="progress"></TasksProgress>
		<NewTask @taskAdded="addTask" />
		<TaskGrid @taskStateChange="changeTaskState" @taskDeleted="deleteTask" :tasks="tasks"/>
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue';
import TaskGrid from './components/TaskGrid.vue';
import TasksProgress from './components/TasksProgress.vue';
export default {
	components: {TaskGrid, NewTask, TasksProgress},
	data() {
		return {
			tasks: [
				{name: 'Lavar louça', pending: false},
				{name: 'Comprar blusa', pending: true},
			]
		}
	},
	computed: {
		progress() {
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return total ? Math.round(done / total * 100) : 0
		}
	},
	created() {
		const tasks = localStorage.getItem('tasks')
		tasks && (this.tasks = JSON.parse(tasks))
	},
	methods: {
		addTask(task) {
			const sameName = t => t.name === task.name
			const realyNew = this.tasks.filter(sameName).length == 0
			realyNew && this.tasks.push({
					name: task.name,
					pending: task.pending || true
				})
		},
		deleteTask(i) {
			this.tasks.splice(i, 1)
		},
		changeTaskState(i) {
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler(tasks) {
				localStorage.setItem('tasks', JSON.stringify(tasks))
			}
		}
	}

}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
