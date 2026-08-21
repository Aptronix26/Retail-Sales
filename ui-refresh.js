(function enhanceDashboardShell(){
  const main=document.querySelector('main.main');
  if(main&&!main.id)main.id='main-content';
  if(!document.querySelector('.ui-skip-link')){
    const skip=document.createElement('a');
    skip.className='ui-skip-link';
    skip.href='#main-content';
    skip.textContent='Skip to dashboard';
    document.body.prepend(skip);
  }
  const navItems=[...document.querySelectorAll('.navitem')];
  const syncCurrent=()=>navItems.forEach(item=>{
    if(item.classList.contains('active'))item.setAttribute('aria-current','page');
    else item.removeAttribute('aria-current');
  });
  navItems.forEach(item=>item.addEventListener('click',()=>requestAnimationFrame(syncCurrent)));
  syncCurrent();
})();
