/*
//==== SERVICE WORKER ===//
let userChoice = false;


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function(){
    new MainController();
  });
}

function MainController() {
  this._registerServiceWorker();
}

MainController.prototype._registerServiceWorker = ()=>{
  // if browser supports the service worker,
  if(!navigator.serviceWorker) return;

  let mainController = this;

  //to register a new service worker if its not present in the scope
  navigator.serviceWorker.register('./sw,js').then((reg)=>{
    console.log('Service worker Registered', reg.scope);

    //if no controller exists, load content from network
    if (!navigator.serviceWorker.controller){
      return;
    }

    //check if there's a waiting worker and inform user of the update
    if (reg.waiting){
      mainController._updateReady(reg.waiting);
      return;
    }

    //check if there's an installing worker and track its state
    if (reg.installing){
      mainController._trackInstalling(reg.installing);
      return;
    }

    //listen for the service worker's updateFound event, if it fires, track its state
    reg.addEventListener('updatefound', ()=>{
      // a sw.js has appered in reg.installing
      const newWorker = reg.installing;
      mainController._trackInstalling(newWorker);
    })

      //catch errors if any when registering the sw.js
  }).catch((error)=>{
    console.log('Error in Registration', error);
  });

  //awake, when sw.js controlling page changes eg when worker
  //skip waiting then jumps to active.
    navigator.serviceWorker.addEventListener('controllerchange', ()=>{
      window.location.reload();
    });
};

  //check for installing sw.js's state and inform user on installation complete
  MainController.prototype._trackInstalling = (worker)=> {
    let mainController = this;
    worker.addEventListener('statechange', ()=>{
      //newWorker.state has changed
      if (worker.state == 'installed'){
        mainController._updateReady(worker);
      }
    });
  };

  MainController.prototype._updateReady = (worker)=>{
    userChoice = confirm("new version available, update?");
    if (!userChoice) return;
    //tell sw.js to skipWaiting
    //log updated sw.js
    worker.postMessage('updateSW');
  };

  */