const links=[...document.querySelectorAll('[data-gallery]')];
if(links.length&&typeof HTMLDialogElement!=='undefined'){
const dialog=document.createElement('dialog');dialog.className='gallery-dialog';dialog.setAttribute('aria-label','Project design viewer');dialog.setAttribute('aria-describedby','gallery-caption');
dialog.innerHTML='<div class="gallery-shell"><div class="gallery-bar"><p id="gallery-caption"></p><button type="button" data-close autofocus>Close ×</button></div><div class="gallery-stage"><img alt=""></div><div class="gallery-bar"><div class="gallery-controls"><button type="button" data-prev aria-label="Previous design">←</button><span aria-live="polite" data-count></span><button type="button" data-next aria-label="Next design">→</button></div><a data-original target="_blank" rel="noopener">Open full image ↗</a></div></div>';
document.body.append(dialog);let current=0,opener;
function show(index){current=(index+links.length)%links.length;const link=links[current],image=dialog.querySelector('img');image.src=link.href;image.alt=link.dataset.caption;dialog.querySelector('#gallery-caption').textContent=link.dataset.caption;dialog.querySelector('[data-count]').textContent=`${current+1} of ${links.length}`;dialog.querySelector('[data-original]').href=link.href;dialog.querySelector('.gallery-stage').scrollTop=0;}
links.forEach((link,index)=>link.addEventListener('click',event=>{if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;event.preventDefault();opener=link;show(index);dialog.showModal();document.body.classList.add('gallery-open');}));
dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());dialog.querySelector('[data-prev]').addEventListener('click',()=>show(current-1));dialog.querySelector('[data-next]').addEventListener('click',()=>show(current+1));dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight'){event.preventDefault();show(current+1);}if(event.key==='ArrowLeft'){event.preventDefault();show(current-1);}});dialog.addEventListener('close',()=>{document.body.classList.remove('gallery-open');opener?.focus({preventScroll:true});});
let backdropPress=false;
dialog.addEventListener('pointerdown',event=>{backdropPress=event.target===dialog;});
dialog.addEventListener('click',event=>{if(backdropPress&&event.target===dialog)dialog.close();backdropPress=false;});
}
