let taskFormEl =  document.querySelector('#task-form'); // here i am takin the form div 
   

    taskFormEl.addEventListener( 'submit',function(){ // here just i am running function with the   help og eventLister here type = submit buuton


    let taskInputEl =  document.querySelector('#input-item');


    let task = taskInputEl.value.trim(); // taking input value 

    let taskList =  localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [] // just checking the local storages is  blank or not if local storages == null then create  blank array ;

    taskList.unshift(task);// with help of unshift function am inserting value in top of the list 

    localStorage.setItem('task',JSON.stringify(taskList));//just i am converting the javascript object into json string  

    displayTasks(); // calling a displaytask function for showing the list 
    window.reload(); //for refreshing the page  with the help of this function -> updating  list according to local storage data 
    
}); 
// display the task now 

let displayTasks =  () => {// this is arrow fumction  
    let taskListEl = document.querySelector('#task-list'); // this task list div or tag  id 
    let taskList =  localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];//just checking the local storages is  blank or not if local storages == null then create  blank array ;
    if(taskList.length !== 0){//checking the localstorages length is null or not 

        let eachTask = '';
        for( let task of taskList){
                eachTask += `<li class="list-group-item list-group-item-action list-group-item-warning">
                            <span class="font-weight-bold">${task}</span>
                            <button class="close">
                                <i class="fa fa-times-circle"></i>
                            </button>
                        </li>`;
        }
        taskListEl.innerHTML = eachTask;
    }
   

}
displayTasks();

/// remove task  now 

let taskListEl =  document.querySelector('#task-list');
taskListEl.addEventListener('click',function(event){
    let targetElement = event.target;
    if(targetElement.classList.contains('fa-times-circle')){
        
        let actualEl =  targetElement.parentElement.parentElement;
        let selectedTask =  actualEl.innerText;
        let taskList =  localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
        taskList = taskList.filter(function(task){

           return task.trim() !== selectedTask.trim();
           
        });
        console.log(taskList);
        localStorage.setItem('task',JSON.stringify(taskList));
        displayTasks(); 
    }

})
