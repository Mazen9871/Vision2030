const lightModeBtn = document.getElementById('lightmode');
const darkModeBtn = document.getElementById('darkmode');
const body = document.body;
lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode'); 
});
darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark-mode'); 
});


const projectsData = {
    
    diriyah: `<h2>بوابة الدرعية</h2>
        <img src="media/images/Diriyah.jpg" alt="الدرعية" style="width: 100%;">
        <p>بوابة الدرعية هي مشروع لإعادة إحياء جوهرة المملكة وتاريخها.</p>
        <p>(هنا يمكنك إضافة المزيد من التفاصيل عن المشروع...)</p>
    `,

    neom: `<h2>مشروع نيوم</h2>
        <img src="media/images/NEOM.webp" alt="نيوم" style="width: 100%;">
        <p>نيوم هي مدينة المستقبل، تم بناؤها على أسس الاستدامة والتكنولوجيا.</p>
        <p>(...تفاصيل إضافية عن نيوم...)</p>
    `,

    qiddiya: `<h2>القدية</h2>
        <img src="media/images/Qiddiya6.jpg" alt="القدية" style="width: 100%;">
        <p>القدية ستكون عاصمة الترفيه والرياضة والفنون في المملكة.</p>
        <p>(...تفاصيل إضافية عن القدية...)</p>
    `,

    redsea: `<h2>مشروع البحر الأحمر</h2>
        <img src="media/images/red sea back.webp" alt="البحر الأحمر" style="width: 100%;"> 
        <p>وجهة سياحية فاخرة تعتمد على الطبيعة والتراث.</p>
        <p>(...تفاصيل إضافية عن البحر الأحمر...)</p>
    `,

    roshn: `<h2>مشروع روشن</h2>
        <img src="media/images/Roshn.jpeg" alt="روشن" style="width: 100%;"> 
        <p>روشن هو مشروع لبناء مجتمعات سكنية عصرية وحيوية.</p>
        <p>(...تفاصيل إضافية عن روشن...)</p>
    `
}

function showProject(projectName) {
    const contentContainer = document.getElementById("project-content-container");
    const projectHTML = projectsData[projectName];
    contentContainer.innerHTML = projectHTML;
}


