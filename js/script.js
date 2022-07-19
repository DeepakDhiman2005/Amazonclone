let inputid = document.getElementById('inputid');
let searchbar = document.getElementById('searchbarid');
let bodysele = document.querySelector('body');
let blackboxid = document.getElementById('blackboxid');

let dropplate = document.getElementById('All');
let searchbtn = document.getElementById('searchbtn');
let searchlistboxid = document.getElementById('searchlistboxid');

function blackboxfunc(){
    blackboxid.style.position = 'absolute';
    blackboxid.style.width = '100%';
    blackboxid.style.height = '100%';
    blackboxid.style.backdropFilter = 'brightness(0.5)';
}
function blackboxfunc2() {
    blackboxid.style.position = 'fixed';
    blackboxid.style.height = '0%';
    blackboxid.style.width = '0%';
    blackboxid.style.backdropFilter = 'none';
}

inputid.addEventListener('focusin', ()=>{
    if (searchbar.style.outline != '3px solid var(--oranges-color)') {
        searchbar.style.border = 'none';
        searchbar.style.outline = '3px solid var(--oranges-color)';
        blackboxfunc();
    }
});
inputid.addEventListener('focusout', ()=>{
    if (searchbar.style.outline == '3px solid var(--oranges-color)') {
        searchbar.style.outline = "none";
        blackboxfunc2();
    }
});
inputid.addEventListener('keyup', (e)=>{
    if (inputid.value == "") {
        searchlistboxid.style.display = 'none';
    }else{
        // console.log(e.key);
        searchlistboxid.style.display = 'block';
    }
});

let acanliboxid = document.getElementById('acanliboxid');
let downsigninplateid = document.getElementById("downsigninplateid");

downsigninplateid.addEventListener('mouseout', ()=>{
    if(acanliboxid.style.display != 'block'){
        acanliboxid.style.display = 'block';
        blackboxfunc();
    }
});
acanliboxid.addEventListener('mouseenter',()=>{
    acanliboxid.style.display = 'block';
    blackboxfunc();
});
acanliboxid.addEventListener('mouseleave',()=>{
    acanliboxid.style.display = 'none';
    blackboxfunc2();
});
downsigninplateid.addEventListener('mouseleave', ()=>{
    if(acanliboxid.style.display != 'none'){
        acanliboxid.style.display = 'none';
        blackboxfunc();
    }
});

let lanchboxid = document.getElementById('lanchboxid');
let hoverflag = document.getElementById('hoverflag');

hoverflag.addEventListener('mouseout', ()=>{
    if(lanchboxid.style.display != 'block'){
        lanchboxid.style.display = 'block';
        blackboxfunc();
    }
});
lanchboxid.addEventListener('mouseenter',()=>{
    lanchboxid.style.display = 'block';
    blackboxfunc();
});
lanchboxid.addEventListener('mouseleave',()=>{
    lanchboxid.style.display = 'none';
    blackboxfunc2();
});
hoverflag.addEventListener('mouseleave', ()=>{
    if(lanchboxid.style.display != 'none'){
        lanchboxid.style.display = 'none';
        blackboxfunc2();
    }
});

let runsidebarid = document.getElementById('runsidebarid');
let sidebarid = document.getElementById('sidebarid');
let crossid = document.getElementById('crossid');

runsidebarid.addEventListener('click', ()=>{
    if (sidebarid.style.width != '100%') {
        sidebarid.style.transition = 'all 0.2s';
        sidebarid.style.width = '100%';
    }
});
crossid.addEventListener('click', ()=>{
    if (sidebarid.style.width != '0%') {
        sidebarid.style.transition = 'all 0.2s';
        sidebarid.style.width = '0%';        
    }
});

let downlist1id = document.getElementById('downlist1id');
let hidelist = document.getElementById('hidelist');
let downarrowid = document.getElementById('downarrowid');

downlist1id.addEventListener('click', ()=>{
    if (hidelist.style.display != 'block') {
        hidelist.style.display = 'block';
        downarrowid.style.transform = 'rotate(135deg)';
        downarrowid.style.marginTop = '8px';
    }else{
        hidelist.style.display = 'none';
        downarrowid.style.transform = 'rotate(-44deg)';
        downarrowid.style.marginTop = '3px';
    }
});

let downlist2id = document.getElementById('downlist2id');
let hidelist2 = document.getElementById('hidelist2');
let downarrow2 = document.getElementById('downarrow2');

downlist2id.addEventListener('click', ()=>{
    if (hidelist2.style.display != 'block') {
        hidelist2.style.display = 'block';
        downarrow2.style.transform = 'rotate(135deg)';
        downarrow2.style.marginTop = '8px';
    }else{
        hidelist2.style.display = 'none';
        downarrow2.style.transform = 'rotate(-44deg)';
        downarrow2.style.marginTop = '3px';
    }
});

//--------------------------- main-container --------------------------
let leftsideid = document.getElementById('leftsideid');
let rightsideid = document.getElementById('rightsideid');

leftsideid.addEventListener('click', ()=>{
    if (leftsideid.style.border != '2px solid cadetblue' || rightsideid.style.border != 'none') {
        leftsideid.style.border = '2px solid cadetblue';
        leftsideid.style.outline = '2px solid whitesmoke';
        rightsideid.style.border = 'none';
        rightsideid.style.outline = 'none';
    }
});
rightsideid.addEventListener('click', ()=>{
    if (rightsideid.style.border != '2px solid cadetblue' || leftsideid.style.border != 'none') {
        rightsideid.style.border = '2px solid cadetblue';
        rightsideid.style.outline = '2px solid whitesmoke';
        leftsideid.style.border = 'none';
        leftsideid.style.outline = 'none';
    }
});

let imgid = document.getElementById('imgid');
let cardcontainerid = document.getElementById('cardcontainerid');
if (window.innerHeight < 502) {
    imgid.style.height = '150%';
    imgid.style.width = '150%';
    imgid.style.marginLeft = '-18rem';
    cardcontainerid.style.marginTop = '-10rem';
}