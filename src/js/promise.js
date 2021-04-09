//promise - это объект

//1 pending - состояние когда проми ассинхронно выполняет операции которые мы поеределим
//2 fulfilled - выполнен успешно
//3 rejected - выполнен с ошибкой

// 1 сценарий: pending переходит в состояние fulfield
//2 сценарий: pendibg->rejected


const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      reject('Error!');
    },2*1000);

    setTimeout(()=>{
      resolve({data:'Resolved'});
    },5*1000);
});
//console.log(promise);

promise
  .then((result)=>{
    console.log('1',result);
   return{
     ...result,
     test:1
   }
  })
  .then((data)=>console.log('2 then ',data))
  .catch((error)=>{
    console.log(error);
  });

