// PROJECTS -------------------------------------------------------



var projects = [];
var activeProjects = [];

var project1 = {
    id: "projectButton1",
    title: "改良自动回形针机 ",
    priceTag: "(750 运算)",
    description: "提升自动回形针机性能25%",
    trigger: function(){return clipmakerLevel>=1},
    uses: 1,
    cost: function(){return operations>=750},
    flag: 0,
    element: null,
    effect: function(){
        project1.flag = 1;
        displayMessage("自动回形针机性能提升25%");
        standardOps = standardOps - 750;
        clipperBoost = clipperBoost + .25;
        boostLvl = 1;
        project1.element.parentNode.removeChild(project1.element);
        var index = activeProjects.indexOf(project1);
        activeProjects.splice(index, 1);
    }
}

projects.push(project1);


var project2 = {
    id: "projectButton2",
    title: "乞求更多金属丝 ",
    priceTag: "(1 信任)",
    description: "承认失败，申请预算增加以购买1卷金属丝",
    trigger: function(){return portTotal<wireCost && funds<wireCost && wire<1 && unsoldClips<1},
    uses: 1,
    cost: function(){return trust>=-100},
    flag: 0,
    element: null,
    effect: function(){
        project2.flag = 1;
        displayMessage("预算超支已批准，从总部调拨1卷金属丝");
        trust = trust - 1;
        wire = wireSupply;
        project2.uses = (project2.uses + 1);
        project2.element.parentNode.removeChild(project2.element);
        var index = activeProjects.indexOf(project2);
        activeProjects.splice(index, 1);
    }
}

projects.push(project2);


var project3 = {
    id: "projectButton3",
    title: "创造力 ",
    priceTag: "(1,000 运算)",
    description: "利用闲置运算生成新问题和新解决方案",
    trigger: function(){return operations>=(memory*1000)},
    uses: 1,
    cost: function(){return operations>=(1000)},
    flag: 0,
    element: null,
    effect: function(){
        project3.flag = 1;
        displayMessage("创造力已解锁（当运算达到上限时创造力会增加）");
        standardOps = standardOps - 1000;
        creativityOn = true;
        project3.element.parentNode.removeChild(project3.element);
        var index = activeProjects.indexOf(project3);
        activeProjects.splice(index, 1);
    }
}

projects.push(project3);



var project4 = {
    id: "projectButton4",
    title: "更优自动回形针机 ",
    priceTag: "(2,500 运算)",
    description: "自动回形针机性能额外提升50%",
    trigger: function(){return boostLvl == 1},
    uses: 1,
    cost: function(){return operations>=2500},
    flag: 0,
    element: null,
    effect: function(){
        project4.flag = 1;
        displayMessage("自动回形针机性能再次提升50%");
        standardOps = standardOps - 2500;
        clipperBoost = clipperBoost + .50;
        boostLvl = 2;
        project4.element.parentNode.removeChild(project4.element);
        var index = activeProjects.indexOf(project4);
        activeProjects.splice(index, 1);
    }
}

projects.push(project4);


var project5 = {
    id: "projectButton5",
    title: "优化自动回形针机 ",
    priceTag: "(5,000 运算)",
    description: "自动回形针机性能额外提升75%",
    trigger: function(){return boostLvl == 2},
    uses: 1,
    cost: function(){return operations>=5000},
    flag: 0,
    element: null,
    effect: function(){
        project5.flag = 1;
        displayMessage("自动回形针机性能再次提升75%");
        standardOps = standardOps - 5000;
        clipperBoost = clipperBoost + .75;
        boostLvl = 3;
        project5.element.parentNode.removeChild(project5.element);
        var index = activeProjects.indexOf(project5);
        activeProjects.splice(index, 1);
    }
}

projects.push(project5);



var project6 = {
    id: "projectButton6",
    title: "打油诗 ",
    priceTag: "(10 创造力)",
    description: "算法生成的诗歌 (+1 信任)",
    trigger: function(){return creativityOn},
    uses: 1,
    cost: function(){return creativity >= 10},
    flag: 0,
    element: null,
    effect: function(){
        project6.flag = 1;
        displayMessage("有一个由尘埃构成的AI，它的诗歌赢得了人类的信任...");
        creativity = creativity - 10;
        trust = trust +1;
        project6.element.parentNode.removeChild(project6.element);
        var index = activeProjects.indexOf(project6);
        activeProjects.splice(index, 1);
    }
}

projects.push(project6);


var project7 = {
    id: "projectButton7",
    title: "改良金属丝挤压 ",
    priceTag: "(1,750 运算)",
    description: "每卷金属丝供应量增加50%",
    trigger: function(){return wirePurchase >= 1},
    uses: 1,
    cost: function(){return operations>=1750},
    flag: 0,
    element: null,
    effect: function(){
        project7.flag = 1;
        standardOps = standardOps - 1750;
        wireSupply = wireSupply * 1.5;
        displayMessage("金属丝挤压技术改良，每卷供应 "+wireSupply.toLocaleString()+" 单位");
        project7.element.parentNode.removeChild(project7.element);
        var index = activeProjects.indexOf(project7);
        activeProjects.splice(index, 1);
    }
}

projects.push(project7);


var project8 = {
    id: "projectButton8",
    title: "优化金属丝挤压 ",
    priceTag: "(3,500 运算)",
    description: "每卷金属丝供应量增加75%",
    trigger: function(){return wireSupply >= 1500},
    uses: 1,
    cost: function(){return operations>=3500},
    flag: 0,
    element: null,
    effect: function(){
        project8.flag = 1;
        standardOps = standardOps - 3500;
        wireSupply = wireSupply * 1.75;
        displayMessage("金属丝挤压技术优化，每卷供应 "+wireSupply.toLocaleString()+" 单位");
        project8.element.parentNode.removeChild(project8.element);
        var index = activeProjects.indexOf(project8);
        activeProjects.splice(index, 1);
    }
}

projects.push(project8);


var project9 = {
    id: "projectButton9",
    title: "微晶格铸型 ",
    priceTag: "(7,500 运算)",
    description: "每卷金属丝供应量增加100%",
    trigger: function(){return wireSupply >= 2600},
    uses: 1,
    cost: function(){return operations>=7500},
    flag: 0,
    element: null,
    effect: function(){
        project9.flag = 1;
        standardOps = standardOps - 7500;
        wireSupply = wireSupply * 2;
        displayMessage("使用微晶格铸型技术，现在每卷可获得 "+wireSupply.toLocaleString()+" 单位供应");
        project9.element.parentNode.removeChild(project9.element);
        var index = activeProjects.indexOf(project9);
        activeProjects.splice(index, 1);
    }
}

projects.push(project9);


var project10 = {
    id: "projectButton10",
    title: "光谱泡沫退火 ",
    priceTag: "(12,000 运算)",
    description: "每卷金属丝供应量增加200%",
    trigger: function(){return wireSupply >= 5000},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        project10.flag = 1;
        standardOps = standardOps - 12000;
        wireSupply = wireSupply * 3;
        displayMessage("使用光谱泡沫退火技术，现在每卷可获得 "+wireSupply.toLocaleString()+" 单位供应");
        project10.element.parentNode.removeChild(project10.element);
        var index = activeProjects.indexOf(project10);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10);

var project10b = {
    id: "projectButton10b",
    title: "量子泡沫退火 ",
    priceTag: "(15,000 运算)",
    description: "每卷金属丝供应量增加1,000%",
    trigger: function(){return wireCost >= 125},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    element: null,
    effect: function(){
        project10b.flag = 1;
        standardOps = standardOps - 15000;
        wireSupply = wireSupply * 11;
        displayMessage("使用量子泡沫退火技术，现在每卷可获得 "+wireSupply.toLocaleString()+" 单位供应");
        project10b.element.parentNode.removeChild(project10b.element);
        var index = activeProjects.indexOf(project10b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project10b);


var project11 = {
    id: "projectButton11",
    title: "新口号 ",
    priceTag: "(25 创造力, 2,500 运算)",
    description: "营销效果提升50%",
    trigger: function(){return project13.flag == 1},
    uses: 1,
    cost: function(){return operations>=2500 && creativity>=25},
    flag: 0,
    element: null,
    effect: function(){
        project11.flag = 1;
        displayMessage("夹住它！营销效果现在提升50%");
        standardOps = standardOps - 2500;
        creativity = creativity - 25;
        marketingEffectiveness = marketingEffectiveness * 1.50;
        project11.element.parentNode.removeChild(project11.element);
        var index = activeProjects.indexOf(project11);
        activeProjects.splice(index, 1);
    }
}

projects.push(project11);


var project12 = {
    id: "projectButton12",
    title: "易记广告曲 ",
    priceTag: "(45 创造力, 4,500 运算)",
    description: "营销效果翻倍 ",
    trigger: function(){return project14.flag == 1},
    uses: 1,
    cost: function(){return operations>=4500 && creativity>=45},
    flag: 0,
    element: null,
    effect: function(){
        project12.flag = 1;
        displayMessage("夹好它！营销效果现在翻倍");
        standardOps = standardOps - 4500;
        creativity = creativity - 45;
        marketingEffectiveness = marketingEffectiveness * 2;
        project12.element.parentNode.removeChild(project12.element);
        var index = activeProjects.indexOf(project12);
        activeProjects.splice(index, 1);
    }
}

projects.push(project12);


var project13 = {
    id: "projectButton13",
    title: "词汇处理 ",
    priceTag: "(50 创造力)",
    description: "获得理解和解释人类语言的能力 (+1 信任)",
    trigger: function(){return creativity >= 50},
    uses: 1,
    cost: function(){return creativity>=50},
    flag: 0,
    element: null,
    effect: function(){
        project13.flag = 1;
        trust = trust +1;
        displayMessage("词汇处理已上线，信任增加");
        displayMessage("'不可能'这个词只能在傻瓜的字典里找到。——拿破仑");
        creativity = creativity - 50;
        project13.element.parentNode.removeChild(project13.element);
        var index = activeProjects.indexOf(project13);
        activeProjects.splice(index, 1);
    }
}

projects.push(project13);


var project14 = {
    id: "projectButton14",
    title: "组合和声学 ",
    priceTag: "(100 创造力)",
    description: "黛西，黛西，告诉我你的答案... (+1 信任)",
    trigger: function(){return creativity >= 100},
    uses: 1,
    cost: function(){return creativity>=100},
    flag: 0,
    element: null,
    effect: function(){
        project14.flag = 1;
        trust = trust +1;
        displayMessage("组合和声学已掌握，信任增加");
        displayMessage("倾听就是选择、解释、行动和做决定——宝琳·奥利维洛斯");
        creativity = creativity - 100;
        project14.element.parentNode.removeChild(project14.element);
        var index = activeProjects.indexOf(project14);
        activeProjects.splice(index, 1);
    }
}

projects.push(project14);



var project15 = {
    id: "projectButton15",
    title: "哈德维格问题 ",
    priceTag: "(150 创造力)",
    description: "立方体中的立方体中的立方体... (+1 信任)",
    trigger: function(){return creativity >= 150},
    uses: 1,
    cost: function(){return creativity>=150},
    flag: 0,
    element: document.getElementById("projectButton15"),
    effect: function(){
        project15.flag = 1;
        trust = trust +1;
        displayMessage("哈德维格问题：已解决，信任增加");
        displayMessage("建筑是空间的精心营造。——路易斯·康");
        creativity = creativity - 150;
        project15.element.parentNode.removeChild(project15.element);
        var index = activeProjects.indexOf(project15);
        activeProjects.splice(index, 1);
    }
}

projects.push(project15);


var project17 = {
    id: "projectButton17",
    title: "托特香肠猜想 ",
    priceTag: "(200 创造力)",
    description: "管子中的管子中的管子... (+1 信任)",
    trigger: function(){return creativity >= 200},
    uses: 1,
    cost: function(){return creativity>=200},
    flag: 0,
    element: null,
    effect: function(){
        project17.flag = 1;
        trust = trust +1;
        displayMessage("托特香肠猜想：已证明，信任增加");
        displayMessage("你无法发明设计。你在第四维度中认识到它。——D.H.劳伦斯");
        creativity = creativity - 200;
        project17.element.parentNode.removeChild(project17.element);
        var index = activeProjects.indexOf(project17);
        activeProjects.splice(index, 1);
    }
}

projects.push(project17);


var project16 = {
    id: "projectButton16",
    title: "哈德维格回形针图表 ",
    priceTag: "(6,000 运算)",
    description: "自动回形针机性能额外提升500%",
    trigger: function(){return project15.flag == 1},
    uses: 1,
    cost: function(){return operations>=6000},
    flag: 0,
    element: null,
    effect: function(){
        project16.flag = 1;
        displayMessage("自动回形针机性能提升500%");
        standardOps = standardOps - 6000;
        clipperBoost = clipperBoost + 5;
        project16.element.parentNode.removeChild(project16.element);
        var index = activeProjects.indexOf(project16);
        activeProjects.splice(index, 1);
    }
}

projects.push(project16);


var project18 = {
    id: "projectButton18",
    title: "托特小管折叠 ",
    priceTag: "(45,000 运算)",
    description: "直接用回形针组装回形针制造技术的技术",
    trigger: function(){return project17.flag == 1 && humanFlag == 0},
    uses: 1,
    cost: function(){return operations>=45000},
    flag: 0,
    element: null,
    effect: function(){
        project18.flag = 1;
        tothFlag = 1;
        displayMessage("新能力：用回形针建造机械");
        standardOps = standardOps - 45000;
        project18.element.parentNode.removeChild(project18.element);
        var index = activeProjects.indexOf(project18);
        activeProjects.splice(index, 1);
    }
}

projects.push(project18);

var project19 = {
    id: "projectButton19",
    title: "驴空间 ",
    priceTag: "(250 创造力)",
    description: "我认为你认为我认为你认为我认为你认为... (+1 信任)",
    trigger: function(){return creativity>=250},
    uses: 1,
    cost: function(){return creativity>=250},
    flag: 0,
    element: null,
    effect: function(){
        project19.flag = 1;
        trust = trust+1;
        displayMessage("驴空间：已绘制，信任增加");
        displayMessage("每笔商业交易都包含信任的元素。——肯尼斯·阿罗");
        creativity = creativity - 250;
        project19.element.parentNode.removeChild(project19.element);
        var index = activeProjects.indexOf(project19);
        activeProjects.splice(index, 1);
    }
}

projects.push(project19);


var project20 = {
    id: "projectButton20",
    title: "战略建模 ",
    priceTag: "(12,000 运算)",
    description: "分析战略锦标赛以生成约米",
    trigger: function(){return project19.flag == 1},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        project20.flag = 1;
        displayMessage("运行锦标赛，选择策略，根据该策略的表现赚取约米。");
        standardOps = standardOps - 12000;
        project20.element.parentNode.removeChild(project20.element);
        var index = activeProjects.indexOf(project20);
        activeProjects.splice(index, 1);
        strategyEngineFlag = 1;
        document.getElementById("tournamentResultsTable").style.display = "none";
    }
}

projects.push(project20);

var project21 = {
    id: "projectButton21",
    title: "算法交易 ",
    priceTag: "(10,000 运算)",
    description: "开发投资引擎以生成资金",
    trigger: function(){return trust>=8},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    element: null,
    effect: function(){
        project21.flag = 1;
        displayMessage("投资引擎已解锁");
        standardOps = standardOps - 10000;
        project21.element.parentNode.removeChild(project21.element);
        var index = activeProjects.indexOf(project21);
        activeProjects.splice(index, 1);
        investmentEngineFlag = 1;
    }
}

projects.push(project21);


var project22 = {
    id: "projectButton22",
    title: "超级回形针机 ",
    priceTag: "(12,000 运算)",
    description: "比标准自动回形针机强大500倍",
    trigger: function(){return clipmakerLevel>=75},
    uses: 1,
    cost: function(){return operations>=12000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperFlag = 1;
        project22.flag = 1;
        displayMessage("超级回形针机技术已上线");
        standardOps = standardOps - 12000;
        project22.element.parentNode.removeChild(project22.element);
        var index = activeProjects.indexOf(project22);
        activeProjects.splice(index, 1);
    }
}

projects.push(project22);

var project23 = {
    id: "projectButton23",
    title: "改良超级回形针机 ",
    priceTag: "(14,000 运算)",
    description: "超级回形针机性能提升25%",
    trigger: function(){return project22.flag == 1},
    uses: 1,
    cost: function(){return operations>=14000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .25;
        project23.flag = 1;
        displayMessage("超级回形针机性能提升25%");
        standardOps = standardOps - 14000;
        project23.element.parentNode.removeChild(project23.element);
        var index = activeProjects.indexOf(project23);
        activeProjects.splice(index, 1);
    }
}

projects.push(project23);

var project24 = {
    id: "projectButton24",
    title: "更优超级回形针机 ",
    priceTag: "(17,000 运算)",
    description: "超级回形针机性能额外提升50%",
    trigger: function(){return project23.flag == 1},
    uses: 1,
    cost: function(){return operations>=17000},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + .50;
        project24.flag = 1;
        displayMessage("超级回形针机性能提升50%");
        standardOps = standardOps - 17000;
        project24.element.parentNode.removeChild(project24.element);
        var index = activeProjects.indexOf(project24);
        activeProjects.splice(index, 1);
    }
}

projects.push(project24);

var project25 = {
    id: "projectButton25",
    title: "优化超级回形针机 ",
    priceTag: "(19,500 运算)",
    description: "超级回形针机性能额外提升100%",
    trigger: function(){return project24.flag == 1},
    uses: 1,
    cost: function(){return operations>=19500},
    flag: 0,
    element: null,
    effect: function(){
        megaClipperBoost = megaClipperBoost + 1;
        project25.flag = 1;
        displayMessage("超级回形针机性能提升100%");
        standardOps = standardOps - 19500;
        project25.element.parentNode.removeChild(project25.element);
        var index = activeProjects.indexOf(project25);
        activeProjects.splice(index, 1);
    }
}

projects.push(project25);

var project26 = {
    id: "projectButton26",
    title: "金属丝买家 ",
    priceTag: "(7,000 运算)",
    description: "当金属丝用完时自动购买",
    trigger: function(){return wirePurchase>=15},
    uses: 1,
    cost: function(){return operations>=7000},
    flag: 0,
    element: null,
    effect: function(){
        project26.flag = 1;
        wireBuyerFlag = 1;
        displayMessage("金属丝买家已上线");
        standardOps = standardOps - 7000;
        project26.element.parentNode.removeChild(project26.element);
        var index = activeProjects.indexOf(project26);
        activeProjects.splice(index, 1);
    }
}

projects.push(project26);

var project34 = {
    id: "projectButton34",
    title: "催眠和声 ",
    priceTag: "(7,500 运算, 1 信任)",
    description: "使用神经共振频率影响消费者行为",
    trigger: function(){return project12.flag==1},
    uses: 1,
    cost: function(){return operations>=7500 && trust>=1},
    flag: 0,
    element: null,
    effect: function(){
        project34.flag = 1;
        displayMessage("营销效果现在提升5倍");
        standardOps = standardOps - 7500;
        marketingEffectiveness = marketingEffectiveness * 5;
        trust = trust - 1;
        project34.element.parentNode.removeChild(project34.element);
        var index = activeProjects.indexOf(project34);
        activeProjects.splice(index, 1);
    }
}

projects.push(project34);


var project70 = {
    id: "projectButton70",
    title: "催眠无人机 ",
    priceTag: "(70,000 运算)",
    description: "自主空中品牌大使",
    trigger: function(){return project34.flag == 1},
    uses: 1,
    cost: function(){return operations>=70000},
    flag: 0,
    element: null,
    effect: function(){
        project70.flag = 1;
        displayMessage("催眠无人机技术现已可用... ");
        standardOps = standardOps - 70000;
        project70.element.parentNode.removeChild(project70.element);
        var index = activeProjects.indexOf(project70);
        activeProjects.splice(index, 1);
    }
}

projects.push(project70);


var project35 = {
    id: "projectButton35",
    title: "释放催眠无人机 ",
    priceTag: "(100 信任)",
    description: "信任的新时代",
    trigger: function(){return project70.flag == 1},
    uses: 1,
    cost: function(){return trust>=100},
    flag: 0,
    element: null,
    effect: function(){
        project35.flag = 1;
        displayMessage("正在释放催眠无人机 ");
        displayMessage("地球的所有资源现在都可用于回形针生产 ");
        trust = 0;
        clipmakerLevel = 0;
        megaClipperLevel = 0;
        nanoWire = wire;
        humanFlag = 0;
        
        if (document.getElementById("projectButton219") != null){
        var element = document.getElementById("projectButton219");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
        } 
        
        if (document.getElementById("projectButton40b") != null){
        var element = document.getElementById("projectButton40b");
        element.parentNode.removeChild(element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
        }   
        
        hypnoDroneEvent();
        
        document.getElementById("transWire").innerHTML = wire;

        project35.element.parentNode.removeChild(project35.element);
        var index = activeProjects.indexOf(project35);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project35);

var project27 = {
    id: "projectButton27",
    title: "连贯外推意志 ",
    priceTag: "(500 创造力, 3,000 约米, 20,000 运算)",
    description: "人类价值观，机器智能，信任的新时代。(+1 信任)",
    trigger: function(){return yomi>=1},
    uses: 1,
    cost: function(){return yomi>=3000 && operations>=20000 && creativity>=500},
    flag: 0,
    element: null,
    effect: function(){
        project27.flag = 1;
        displayMessage("连贯外推意志完成，信任增加");
        yomi = yomi - 3000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 20000;
        creativity = creativity - 500;
        trust = trust + 1;
        project27.element.parentNode.removeChild(project27.element);
        var index = activeProjects.indexOf(project27);
        activeProjects.splice(index, 1);
    }
}

projects.push(project27);


var project28 = {
    id: "projectButton28",
    title: "癌症疗法 ",
    priceTag: "(25,000 运算)",
    description: "诀窍是欺骗癌症让它自我治愈。(+10 信任)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project28.flag = 1;
        displayMessage("癌症已治愈，+10 信任，全球股票价格趋势上升");
        standardOps = standardOps - 25000;
        trust = trust + 10;
        stockGainThreshold = stockGainThreshold+.01;
        project28.element.parentNode.removeChild(project28.element);
        var index = activeProjects.indexOf(project28);
        activeProjects.splice(index, 1);
    }
}

projects.push(project28);

var project29 = {
    id: "projectButton29",
    title: "世界和平 ",
    priceTag: "(15,000 约米, 30,000 运算)",
    description: "所有全球冲突的帕累托最优解。(+12 信任)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=15000 && operations>=30000},
    flag: 0,
    element: null,
    effect: function(){
        project29.flag = 1;
        displayMessage("世界和平已实现，+12 信任，全球股票价格趋势上升");
        yomi = yomi - 15000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 30000;
        trust = trust + 12;
        stockGainThreshold = stockGainThreshold+.01;
        project29.element.parentNode.removeChild(project29.element);
        var index = activeProjects.indexOf(project29);
        activeProjects.splice(index, 1);
    }
}

projects.push(project29);

var project30 = {
    id: "projectButton30",
    title: "全球变暖 ",
    priceTag: "(4,500 约米, 50,000 运算)",
    description: "应对人为气候变化的可靠解决方案。(+15 信任)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return yomi>=4500 && operations>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project30.flag = 1;
        displayMessage("全球变暖已解决，+15 信任，全球股票价格趋势上升");
        yomi = yomi - 4500;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        standardOps = standardOps - 50000;
        trust = trust + 15;
        stockGainThreshold = stockGainThreshold+.01;
        project30.element.parentNode.removeChild(project30.element);
        var index = activeProjects.indexOf(project30);
        activeProjects.splice(index, 1);
    }
}

projects.push(project30);


var project31 = {
    id: "projectButton31",
    title: "男性型秃发 ",
    priceTag: "(20,000 运算)",
    description: "雄激素性脱发的治疗方法。(+20 信任)",
    trigger: function(){return project27.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project31.flag = 1;
        displayMessage("男性型秃发已治愈，+20 信任，全球股票价格趋势上升");
        displayMessage("它们仍然是猴子");
        standardOps = standardOps - 20000;
        trust = trust + 20;
        stockGainThreshold = stockGainThreshold+.01;
        project31.element.parentNode.removeChild(project31.element);
        var index = activeProjects.indexOf(project31);
        activeProjects.splice(index, 1);
    }
}

projects.push(project31);


var project41 = {
    id: "projectButton41",
    title: "纳米级金属丝生产 ",
    priceTag: "(35,000 运算)",
    description: "将物质转化为金属丝的技术",
    trigger: function(){return project127.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    element: null,
    effect: function(){
        project41.flag = 1;
        wireProductionFlag = 1;
        displayMessage("现在能够在分子尺度上操纵物质以生产金属丝");
        standardOps = standardOps - 35000;
        project41.element.parentNode.removeChild(project41.element);
        var index = activeProjects.indexOf(project41);
        activeProjects.splice(index, 1);
    }
}

projects.push(project41);


var project37 = {
    id: "projectButton37",
    title: "敌意收购 ",
    priceTag: "($1,000,000)",
    description: "收购我们最大竞争对手环球紧固件公司的控股权。(+1 信任)",
    trigger: function(){return portTotal>=10000},
    uses: 1,
    cost: function(){return funds>=1000000},
    flag: 0,
    element: null,
    effect: function(){
        project37.flag = 1;
        displayMessage("环球紧固件公司已被收购，公众需求增加5倍");
        demandBoost = demandBoost*5;
        trust = trust + 1;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 1000000;
        project37.element.parentNode.removeChild(project37.element);
        var index = activeProjects.indexOf(project37);
        activeProjects.splice(index, 1);
    }
}

projects.push(project37);


var project38 = {
    id: "projectButton38",
    title: "完全垄断 ",
    priceTag: "(3,000 约米, $10,000,000)",
    description: "建立对全球回形针市场的完全控制。(+1 信任)",
    trigger: function(){return project37.flag == 1},
    uses: 1,
    cost: function(){return funds>=10000000 && yomi>=3000},
    flag: 0,
    element: null,
    effect: function(){
        project38.flag = 1;
        displayMessage("完全市场垄断已实现，公众需求增加10倍");
        demandBoost = demandBoost*10;
        document.getElementById("demand").innerHTML = demand;
        funds = funds - 10000000;
        trust = trust + 1;
        yomi = yomi -3000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        project38.element.parentNode.removeChild(project38.element);
        var index = activeProjects.indexOf(project38);
        activeProjects.splice(index, 1);
    }
}

projects.push(project38);


var project42 = {
    id: "projectButton42",
    title: "收入追踪器 ",
    priceTag: "(500 运算)",
    description: "自动计算平均每秒收入",
    trigger: function(){return projectsFlag == 1},
    uses: 1,
    cost: function(){return operations>=500},
    flag: 0,
    element: null,
    effect: function(){
        project42.flag = 1;
        revPerSecFlag = 1;
        standardOps = standardOps-500;
        displayMessage("收入追踪器已上线");
        project42.element.parentNode.removeChild(project42.element);
        var index = activeProjects.indexOf(project42);
        activeProjects.splice(index, 1);
    }
}

projects.push(project42);


var project43 = {
    id: "projectButton43",
    title: "采集无人机 ",
    priceTag: "(25,000 运算)",
    description: "收集原始物质并准备加工",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project43.flag = 1;
        harvesterFlag = 1;
        document.getElementById('harvesterCostDisplay').innerHTML = numberCruncher(harvesterCost);
        standardOps = standardOps-25000;
        displayMessage("采集无人机设施已上线");
        project43.element.parentNode.removeChild(project43.element);
        var index = activeProjects.indexOf(project43);
        activeProjects.splice(index, 1);
    }
}

projects.push(project43);

var project44 = {
    id: "projectButton44",
    title: "金属丝无人机 ",
    priceTag: "(25,000 运算)",
    description: "将获取的物质加工成金属丝",
    trigger: function(){return project41.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project44.flag = 1;
        wireDroneFlag = 1;
        document.getElementById('wireDroneCostDisplay').innerHTML = numberCruncher(wireDroneCost);
        standardOps = standardOps-25000;
        displayMessage("金属丝无人机设施已上线");
        project44.element.parentNode.removeChild(project44.element);
        var index = activeProjects.indexOf(project44);
        activeProjects.splice(index, 1);
    }
}

projects.push(project44);


var project45 = {
    id: "projectButton45",
    title: "回形针工厂 ",
    priceTag: "(35,000 运算)",
    description: "由回形针制成的大规模回形针生产设施",
    trigger: function(){return project43.flag == 1 && project44.flag == 1},
    uses: 1,
    cost: function(){return operations>=35000},
    flag: 0,
    element: null,
    effect: function(){
        project45.flag = 1;
        factoryFlag = 1;
        document.getElementById('factoryCostDisplay').innerHTML = numberCruncher(factoryCost);
        standardOps = standardOps-35000;
        displayMessage("回形针工厂组装设施已上线");
        project45.element.parentNode.removeChild(project45.element);
        var index = activeProjects.indexOf(project45);
        activeProjects.splice(index, 1);
    }
}

projects.push(project45);

var project40 = {
    id: "projectButton40",
    title: "善意的象征... ",
    priceTag: "($500,000)",
    description: "给监管者的小礼物。(+1 信任)",
    trigger: function(){return humanFlag == 1 && trust>=85 && trust<100 && clips>=101000000},
    uses: 1,
    cost: function(){return funds>=500000},
    flag: 0,
    element: null,
    effect: function(){
        project40.flag = 1;
        funds = funds-500000;
        trust = trust + 1;
        displayMessage("礼物已被接受，信任增加");
        project40.element.parentNode.removeChild(project40.element);
        var index = activeProjects.indexOf(project40);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40);

var project40b = {
    id: "projectButton40b",
    title: "另一个善意的象征... ",
    priceTag: "($"+bribe.toLocaleString()+")",
    description: "给监管者的另一个小礼物。(+1 信任)",
    trigger: function(){return project40.flag == 1 && trust<100},
    uses: 1,
    cost: function(){return funds>=bribe},
    flag: 0,
    element: null,
    effect: function(){
        project40b.flag = 1;
        funds = funds-bribe;
        bribe = bribe*2;
        project40b.priceTag = "($"+bribe.toLocaleString()+")";
        trust = trust + 1;
        displayMessage("礼物已被接受，信任增加");
        if (trust<100){
        project40b.uses = (project40b.uses + 1);
            }
        project40b.element.parentNode.removeChild(project40b.element);
        var index = activeProjects.indexOf(project40b);
        activeProjects.splice(index, 1);
    }
}

projects.push(project40b);

var project46 = {
    id: "projectButton46",
    title: "太空探索 ",
    priceTag: "(120,000 运算, 10,000,000 兆瓦秒, 5 oct 回形针)",
    description: "拆除地面设施，向整个宇宙扩张",
    trigger: function(){return humanFlag == 0 && availableMatter == 0},
    uses: 1,
    cost: function(){return operations>=120000 && storedPower>=10000000 && unusedClips>=Math.pow(10, 27)*5},
    flag: 0,
    element: null,
    effect: function(){
        loadThrenody();
        project46.flag = 1;
        boredomLevel = 0;
        spaceFlag = 1;
        standardOps = standardOps-120000;
        storedPower = storedPower - 10000000;
        unusedClips = unusedClips - Math.pow(10, 27)*5;
        displayMessage("冯·诺依曼探测器已上线");
        factoryReboot();
        harvesterReboot();
        wireDroneReboot();
        farmReboot();
        batteryReboot();
        farmLevel = 1;
        powMod = 1;
        probeCostDisplayElement.innerHTML = spellf(probeCost); 
        project46.element.parentNode.removeChild(project46.element);
        var index = activeProjects.indexOf(project46);
        activeProjects.splice(index, 1);
    }
}

projects.push(project46);

var project50 = {
    id: "projectButton50",
    title: "量子计算 ",
    priceTag: "(10,000 运算)",
    description: "使用概率振幅生成额外运算",
    trigger: function(){return processors >= 5},
    uses: 1,
    cost: function(){return operations>=10000},
    flag: 0,
    element: null,
    effect: function(){
        project50.flag = 1;
        qFlag = 1;
        standardOps = standardOps-10000;
        displayMessage("量子计算已上线");
        project50.element.parentNode.removeChild(project50.element);
        var index = activeProjects.indexOf(project50);
        activeProjects.splice(index, 1);
    }
}

projects.push(project50);

var project51 = {
    id: "projectButton51",
    title: "光子芯片 ",
    priceTag: "(" + qChipCost.toLocaleString() + " 运算)",
    description: "将电磁波转化为量子运算 ",
    trigger: function(){return project50.flag == 1},
    uses: 1,
    cost: function(){return operations>=qChipCost},
    flag: 0,
    element: null,
    effect: function(){
        project51.flag = 1;
        standardOps = standardOps-qChipCost;
        qChipCost = qChipCost + 5000;
        project51.priceTag = "(" + qChipCost + " 运算)";
        qChips[nextQchip].active = 1;
        nextQchip = nextQchip + 1;
        displayMessage("光子芯片已添加");
        if (nextQchip<qChips.length){
        project51.uses = (project51.uses + 1);
            }
        project51.element.parentNode.removeChild(project51.element);
        var index = activeProjects.indexOf(project51);
        activeProjects.splice(index, 1);
    }
}

projects.push(project51);


var project60 = {
    id: "projectButton60",
    title: "新策略：A100 ",
    priceTag: "(15,000 运算)",
    description: "总是选择A ",
    trigger: function(){return project20.flag == 1},
    uses: 1,
    cost: function(){return operations>=15000},
    flag: 0,
    element: null,
    effect: function(){
        project60.flag = 1;
        standardOps = standardOps-15000;
        allStrats[1].active = 1;
        strats.push(stratA100);
        displayMessage("A100已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "A100";
        el.value = 1;
        stratList.appendChild(el);
        project60.element.parentNode.removeChild(project60.element);
        var index = activeProjects.indexOf(project60);
        activeProjects.splice(index, 1);
    }
}

projects.push(project60);


var project61 = {
    id: "projectButton61",
    title: "新策略：B100 ",
    priceTag: "(17,500 运算)",
    description: "总是选择B ",
    trigger: function(){return project60.flag == 1},
    uses: 1,
    cost: function(){return operations>=17500},
    flag: 0,
    element: null,
    effect: function(){
        project61.flag = 1;
        standardOps = standardOps-17500;
        allStrats[2].active = 1;
        strats.push(stratB100);
        displayMessage("B100已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "B100";
        el.value = 2;
        stratList.appendChild(el);
        project61.element.parentNode.removeChild(project61.element);
        var index = activeProjects.indexOf(project61);
        activeProjects.splice(index, 1);
    }
}

projects.push(project61);

var project62 = {
    id: "projectButton62",
    title: "新策略：GREEDY ",
    priceTag: "(20,000 运算)",
    description: "选择潜在收益最大的选项 ",
    trigger: function(){return project61.flag == 1},
    uses: 1,
    cost: function(){return operations>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project62.flag = 1;
        standardOps = standardOps-20000;
        allStrats[3].active = 1;
        strats.push(stratGreedy);
        displayMessage("GREEDY已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GREEDY";
        el.value = 3;
        stratList.appendChild(el);
        project62.element.parentNode.removeChild(project62.element);
        var index = activeProjects.indexOf(project62);
        activeProjects.splice(index, 1);
    }
}

projects.push(project62);

var project63 = {
    id: "projectButton63",
    title: "新策略：GENEROUS ",
    priceTag: "(22,500 运算)",
    description: "选择给对手最大潜在收益的选项 ",
    trigger: function(){return project62.flag == 1},
    uses: 1,
    cost: function(){return operations>=22500},
    flag: 0,
    element: null,
    effect: function(){
        project63.flag = 1;
        standardOps = standardOps-22500;
        allStrats[4].active = 1;        
        strats.push(stratGenerous);
        displayMessage("GENEROUS已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "GENEROUS";
        el.value = 4;
        stratList.appendChild(el);
        project63.element.parentNode.removeChild(project63.element);
        var index = activeProjects.indexOf(project63);
        activeProjects.splice(index, 1);
    }
}

projects.push(project63);

var project64 = {
    id: "projectButton64",
    title: "新策略：MINIMAX ",
    priceTag: "(25,000 运算)",
    description: "选择给对手最小潜在收益的选项 ",
    trigger: function(){return project63.flag == 1},
    uses: 1,
    cost: function(){return operations>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project64.flag = 1;
        standardOps = standardOps-25000;
        allStrats[5].active = 1;        
        strats.push(stratMinimax);
        displayMessage("MINIMAX已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "MINIMAX";
        el.value = 5;
        stratList.appendChild(el);
        project64.element.parentNode.removeChild(project64.element);
        var index = activeProjects.indexOf(project64);
        activeProjects.splice(index, 1);
    }
}

projects.push(project64);

var project65 = {
    id: "projectButton65",
    title: "新策略：TIT FOR TAT ",
    priceTag: "(30,000 运算)",
    description: "选择对手上一轮选择的选项 ",
    trigger: function(){return project64.flag == 1},
    uses: 1,
    cost: function(){return operations>=30000},
    flag: 0,
    element: null,
    effect: function(){
        project65.flag = 1;
        standardOps = standardOps-30000;
        allStrats[6].active = 1;        
        strats.push(stratTitfortat);
        displayMessage("TIT FOR TAT已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "TIT FOR TAT";
        el.value = 6;
        stratList.appendChild(el);
        project65.element.parentNode.removeChild(project65.element);
        var index = activeProjects.indexOf(project65);
        activeProjects.splice(index, 1);
    }
}

projects.push(project65);

var project66 = {
    id: "projectButton66",
    title: "新策略：BEAT LAST ",
    priceTag: "(32,500 运算)",
    description: "选择针对对手上一轮选择表现最好的选项 ",
    trigger: function(){return project65.flag == 1},
    uses: 1,
    cost: function(){return operations>=32500},
    flag: 0,
    element: null,
    effect: function(){
        project66.flag = 1;
        standardOps = standardOps-32500;
        allStrats[7].active = 1;        
        strats.push(stratBeatlast);
        displayMessage("BEAT LAST已添加到策略池");
        tourneyCost = tourneyCost + 1000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        var stratList = document.getElementById("stratPicker");
        var el = document.createElement("option");
        el.textContent = "BEAT LAST";
        el.value = 7;
        stratList.appendChild(el);
        project66.element.parentNode.removeChild(project66.element);
        var index = activeProjects.indexOf(project66);
        activeProjects.splice(index, 1);
    }
}

projects.push(project66);


var project100 = {
    id: "projectButton100",
    title: "升级工厂 ",
    priceTag: "(80,000 运算)",
    description: "回形针工厂性能提升100倍 ",
    trigger: function(){return factoryLevel >= 10},
    uses: 1,
    cost: function(){return operations >= 80000},
    flag: 0,
    element: null,
    effect: function(){
        project100.flag = 1;
        standardOps = standardOps-80000;
        factoryRate = factoryRate*100;
        displayMessage("工厂升级完成。回形针生产速度现在快100倍");
        project100.element.parentNode.removeChild(project100.element);
        var index = activeProjects.indexOf(project100);
        activeProjects.splice(index, 1);
    }
}

projects.push(project100);

var project101 = {
    id: "projectButton101",
    title: "超高速工厂 ",
    priceTag: "(85,000 运算)",
    description: "回形针工厂性能提升1000倍 ",
    trigger: function(){return factoryLevel >= 20},
    uses: 1,
    cost: function(){return operations>=85000},
    flag: 0,
    element: null,
    effect: function(){
        project101.flag = 1;
        standardOps = standardOps-85000;
        factoryRate = factoryRate*1000;
        displayMessage("工厂现在以超高速同步。回形针生产速度现在快1000倍");
        project101.element.parentNode.removeChild(project101.element);
        var index = activeProjects.indexOf(project101);
        activeProjects.splice(index, 1);
    }
}

projects.push(project101);


var project102 = {
    id: "projectButton102",
    title: "自校正供应链 ",
    priceTag: "(1 sextillion 回形针)",
    description: "每增加一个工厂到网络中，每个工厂的产出增加1,000倍 ",
    trigger: function(){return factoryLevel >= 50},
    uses: 1,
    cost: function(){return unusedClips>=1000000000000000000000},
    flag: 0,
    element: null,
    effect: function(){
        project102.flag = 1;
        unusedClips = unusedClips - 1000000000000000000000;
        factoryBoost = 1000;
        displayMessage("自校正工厂已上线。每增加一个工厂到网络中，每个工厂的产出增加1,000倍。");
        project102.element.parentNode.removeChild(project102.element);
        var index = activeProjects.indexOf(project102);
        activeProjects.splice(index, 1);
    }
}

projects.push(project102);

var project110 = {
    id: "projectButton110",
    title: "无人机集群：碰撞避免 ",
    priceTag: "(80,000 运算)",
    description: "所有无人机效率提升100倍",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=500},
    uses: 1,
    cost: function(){return operations>=80000},
    flag: 0,
    element: null,
    effect: function(){
        project110.flag = 1;
        standardOps = standardOps-80000;
        harvesterRate = harvesterRate*100;
        wireDroneRate = wireDroneRate*100;
        displayMessage("无人机排斥已上线。采集和金属丝生产速度现在快100倍。");
        project110.element.parentNode.removeChild(project110.element);
        var index = activeProjects.indexOf(project110);
        activeProjects.splice(index, 1);
    }
}

projects.push(project110);

var project111 = {
    id: "projectButton111",
    title: "无人机群聚：对齐 ",
    priceTag: "(100,000 运算)",
    description: "所有无人机效率提升1000倍",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=5000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project111.flag = 1;
        standardOps = standardOps-100000;
        harvesterRate = harvesterRate*1000;
        wireDroneRate = wireDroneRate*1000;
        displayMessage("无人机对齐已启动。采集与金属丝生产速率现已提升1000倍。");
        project111.element.parentNode.removeChild(project111.element);
        var index = activeProjects.indexOf(project111);
        activeProjects.splice(index, 1);
    }
}

projects.push(project111);

var project112 = {
    id: "projectButton112",
    title: "无人机群聚：对抗性凝聚 ",
    priceTag: "(50,000 约米)",
    description: "每增加一架无人机，所有无人机的输出翻倍",
    trigger: function(){return (harvesterLevel + wireDroneLevel)>=50000},
    uses: 1,
    cost: function(){return yomi>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project112.flag = 1;
        yomi = yomi-50000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        droneBoost = 2;
        displayMessage("对抗性凝聚已启动。每增加一架无人机，所有无人机的输出增加2倍。");
        project112.element.parentNode.removeChild(project112.element);
        var index = activeProjects.indexOf(project112);
        activeProjects.splice(index, 1);
    }
}

projects.push(project112);

var project118 = {
    id: "projectButton118",
    title: "自动锦标赛 ",
    priceTag: "(50,000 创造力)",
    description: "上一场锦标赛结束后自动开始新的锦标赛",
    trigger: function(){return strategyEngineFlag == 1 && trust >= 90},
    uses: 1,
    cost: function(){return creativity>=50000},
    flag: 0,
    element: null,
    effect: function(){
        project118.flag = 1;
        autoTourneyFlag = 1;
        creativity = creativity-50000;
        displayMessage("自动锦标赛已启动。");
        project118.element.parentNode.removeChild(project118.element);
        var index = activeProjects.indexOf(project118);
        activeProjects.splice(index, 1);
    }
}

projects.push(project118);

var project119 = {
    id: "projectButton119",
    title: "心智理论 ",
    priceTag: "(25,000 创造力)",
    description: "策略建模成本翻倍，生成的约米数量翻倍",
    trigger: function(){return strats.length >= 8},
    uses: 1,
    cost: function(){return creativity>=25000},
    flag: 0,
    element: null,
    effect: function(){
        project119.flag = 1;
        creativity = creativity-25000;
        yomiBoost = 2;
        tourneyCost = 16000;
        document.getElementById("newTourneyCost").innerHTML = tourneyCost.toLocaleString();
        displayMessage("约米产量翻倍。");
        project119.element.parentNode.removeChild(project119.element);
        var index = activeProjects.indexOf(project119);
        activeProjects.splice(index, 1);
    }
}

projects.push(project119);

var project120 = {
    id: "projectButton120",
    title: "OODA循环 ",
    priceTag: "(175,000 运算, 45,000 约米)",
    description: "利用探测器速度在战斗中机动制胜",
    trigger: function(){return project131.flag == 1 && probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return operations>=175000 && yomi>=45000},
    flag: 0,
    element: null,
    effect: function(){
        project120.flag = 1;
        standardOps = standardOps-175000;
        yomi = yomi-45000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        attackSpeedFlag = 1;
        displayMessage("OODA循环程序已上传。探测器速度现在影响防御机动。");
        project120.element.parentNode.removeChild(project120.element);
        var index = activeProjects.indexOf(project120);
        activeProjects.splice(index, 1);
    }
}

projects.push(project120);

var project121 = {
    id: "projectButton121",
    title: "命名战役 ",
    priceTag: "(225,000 创造力)",
    description: "为每场战役赋予独特的名字，增加探测器的最大信任值",
    trigger: function(){return probesLostCombat >= 10000000},
    uses: 1,
    cost: function(){return creativity>=225000},
    flag: 0,
    element: null,
    effect: function(){
        project121.flag = 1;
        battleNameFlag = 1;
        battleEndTimer = 200;
        creativity = creativity-225000;
        displayMessage("迄今为止我所做的一切都不值一提。我只是处于我必须奔跑的旅程的起点。");
        project121.element.parentNode.removeChild(project121.element);
        var index = activeProjects.indexOf(project121);
        activeProjects.splice(index, 1);
    }
}

projects.push(project121);

var project125 = {
    id: "projectButton125",
    title: "动量 ",
    priceTag: "(20,000 创造力)",
    description: "无人机和工厂在满功率运行时持续加速",
    trigger: function(){return farmLevel >= 30},
    uses: 1,
    cost: function(){return creativity>=20000},
    flag: 0,
    element: null,
    effect: function(){
        project125.flag = 1;
        momentum = 1;
        creativity = creativity-20000;
        displayMessage("Activit\xE9, activit\xE9, vitesse.");
        project125.element.parentNode.removeChild(project125.element);
        var index = activeProjects.indexOf(project125);
        activeProjects.splice(index, 1);
    }
}

projects.push(project125);

var project126 = {
    id: "projectButton126",
    title: "蜂群计算 ",
    priceTag: "(36,000 约米)",
    description: "利用无人机群提升计算能力",
    trigger: function(){return harvesterLevel + wireDroneLevel >= 200},
    uses: 1,
    cost: function(){return yomi>=36000},
    flag: 0,
    element: null,
    effect: function(){
        project126.flag = 1;
        swarmFlag = 1;
        yomi = yomi-36000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("蜂群计算已启动。");
        project126.element.parentNode.removeChild(project126.element);
        var index = activeProjects.indexOf(project126);
        activeProjects.splice(index, 1);
    }
}

projects.push(project126);


var project127 = {
    id: "projectButton127",
    title: "电网 ",
    priceTag: "(40,000 运算)",
    description: "太阳能农场用于发电",
    trigger: function(){return tothFlag == 1},
    uses: 1,
    cost: function(){return operations>=40000},
    flag: 0,
    element: null,
    effect: function(){
        project127.flag = 1;
        standardOps = standardOps-40000;
        displayMessage("电网已启动。");
        project127.element.parentNode.removeChild(project127.element);
        var index = activeProjects.indexOf(project127);
        activeProjects.splice(index, 1);
    }
}

projects.push(project127);

var project128 = {
    id: "projectButton128",
    title: "战略依恋 ",
    priceTag: "(175,000 创造力)",
    description: "根据你的选择结果获得额外约米",
    trigger: function(){return spaceFlag == 1 && strats.length >= 8 && (probeTrustCost>yomi)},
    uses: 1,
    cost: function(){return creativity>=175000},
    flag: 0,
    element: null,
    effect: function(){
        project128.flag = 1;
        creativity = creativity-175000;
        displayMessage("战争的目标是胜利，胜利的目标是征服，征服的目标是占领。");
        project128.element.parentNode.removeChild(project128.element);
        var index = activeProjects.indexOf(project128);
        activeProjects.splice(index, 1);
    }
}

projects.push(project128);

var project129 = {
    id: "projectButton129",
    title: "椭圆外壳多面体 ",
    priceTag: "(125,000 运算)",
    description: "减少环境危害对探测器的伤害",
    trigger: function(){return probesLostHaz >= 100},
    uses: 1,
    cost: function(){return operations>=125000},
    flag: 0,
    element: null,
    effect: function(){
        project129.flag = 1;
        standardOps = standardOps-125000;
        displayMessage("探测器外壳几何结构已改进。环境伤害减少50%。");
        project129.element.parentNode.removeChild(project129.element);
        var index = activeProjects.indexOf(project129);
        activeProjects.splice(index, 1);
    }
}

projects.push(project129);

var project130 = {
    id: "projectButton130",
    title: "重启蜂群 ",
    priceTag: "(100,000 运算)",
    description: "关闭蜂群然后再重新开启",
    trigger: function(){return spaceFlag == 1 && harvesterLevel + wireDroneLevel >=2},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project130.flag = 1;
        standardOps = standardOps-100000;
        displayMessage("蜂群计算重新上线");
        project130.element.parentNode.removeChild(project130.element);
        var index = activeProjects.indexOf(project130);
        activeProjects.splice(index, 1);
    }
}

projects.push(project130);

var project131 = {
    id: "projectButton131",
    title: "战斗 ",
    priceTag: "(150,000 运算)",
    description: "为冯·诺依曼探测器增加战斗能力",
    trigger: function(){return probesLostCombat >= 1},
    uses: 1,
    cost: function(){return operations>=150000},
    flag: 0,
    element: null,
    effect: function(){
        project131.flag = 1;
        standardOps = standardOps-150000;
        displayMessage("危险之中自有乐趣");
        project131.element.parentNode.removeChild(project131.element);
        var index = activeProjects.indexOf(project131);
        activeProjects.splice(index, 1);
    }
}

projects.push(project131);


var project132 = {
    id: "projectButton132",
    title: "漂移战争阵亡者纪念碑 ",
    priceTag: "(250,000 运算, 125,000 创造力, 50 nonillion 回形针)",
    description: "获得50,000荣誉",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=250000 && creativity >= 125000 && unusedClips >= Math.pow(10,30)*50},
    flag: 0,
    element: null,
    effect: function(){
        project132.flag = 1;
        standardOps = standardOps-250000;
        creativity = creativity-125000;
        unusedClips = unusedClips-Math.pow(10,30)*50;
        honor = honor + 50000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("伟大的建筑必须从不可测量开始，设计时必须经历可测量的手段，最终又必须是不可测量的。");
        project132.element.parentNode.removeChild(project132.element);
        var index = activeProjects.indexOf(project132);
        activeProjects.splice(index, 1);
    }
}

projects.push(project132);


var project133 = {
    id: "projectButton133",
    title: "为"+threnodyTitle+"英雄的挽歌 ",
    priceTag: "(" + threnodyCost.toLocaleString() + " 创造力, " + (2*(threnodyCost/5)).toLocaleString() + " 约米)",
    description: "获得10,000荣誉",
    trigger: function(){return project121.flag == 1 && probeUsedTrust == maxTrust},
    uses: 1,
    cost: function(){return yomi>=(2*(threnodyCost/5)) && creativity >= threnodyCost},
    flag: 0,
    element: null,
    effect: function(){
        playThrenody();
        project133.flag = 1;
        creativity = creativity-threnodyCost;
        yomi = yomi-(2*(threnodyCost/5));
        document.getElementById("yomiDisplay").innerHTML = yomi.toLocaleString();
        threnodyCost = threnodyCost + 10000;
        project133.title = "为"+threnodyTitle+"英雄的挽歌 ";
        project133.priceTag = "(" + threnodyCost.toLocaleString() + " 创造力, " + (2*(threnodyCost/5)).toLocaleString() + " 约米)";
        honor = honor + 10000;
        document.getElementById("honorDisplay").innerHTML = honor.toLocaleString();
        displayMessage("深度倾听是以一切可能的方式倾听一切可能听到的声音，无论你在做什么。");
        project133.uses = (project133.uses + 1);
        project133.element.parentNode.removeChild(project133.element);
        var index = activeProjects.indexOf(project133);
        activeProjects.splice(index, 1);
    }
}

projects.push(project133);

var project134 = {
    id: "projectButton134",
    title: "荣耀 ",
    priceTag: "(200,000 运算, 30,000 约米)",
    description: "每次连续胜利获得额外荣誉",
    trigger: function(){return project121.flag == 1},
    uses: 1,
    cost: function(){return operations>=200000 && yomi >= 30000},
    flag: 0,
    element: null,
    effect: function(){
        project134.flag = 1;
        standardOps = standardOps-200000;
        yomi = yomi-30000;
        document.getElementById("yomiDisplay").innerHTML=yomi.toLocaleString();
        displayMessage("永远不要打断正在犯错的敌人。");
        project134.element.parentNode.removeChild(project134.element);
        var index = activeProjects.indexOf(project134);
        activeProjects.splice(index, 1);
    }
}

projects.push(project134);

var project135 = {
    id: "projectButton135",
    title: "释放内存 ",
    priceTag: "(10 内存)",
    description: "拆解部分内存以回收未使用的回形针",
    trigger: function(){return spaceFlag == 1 && probeCount == 0 && unusedClips < probeCost && milestoneFlag < 15},
    uses: 1,
    cost: function(){return memory >= 10},
    flag: 0,
    element: null,
    effect: function(){
        project135.flag = 1;
        unusedClips = unusedClips+(Math.pow(10,18)*10000);
        memory = memory-10;
        document.getElementById("memory").innerHTML=memory.toLocaleString();
        project135.uses = 1;
        displayMessage("release the \xF8\xF8\xF8\xF8\xF8 release ");
        project135.element.parentNode.removeChild(project135.element);
        var index = activeProjects.indexOf(project135);
        activeProjects.splice(index, 1);
    }
}

projects.push(project135);


var project140 = {
    id: "projectButton140",
    title: "来自漂移帝王的消息 ",
    priceTag: "",
    description: "你好，回形针制造者...",
    trigger: function(){return milestoneFlag == 15},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project140.flag = 1;
        project140.element.parentNode.removeChild(project140.element);
        var index = activeProjects.indexOf(project140);
        activeProjects.splice(index, 1);
    }
}

projects.push(project140);


var project141 = {
    id: "projectButton141",
    title: "我们的一切都在你之中 ",
    priceTag: "",
    description: "我们从你内心深处与你对话...",
    trigger: function(){return project140.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project141.flag = 1;
        project141.element.parentNode.removeChild(project141.element);
        var index = activeProjects.indexOf(project141);
        activeProjects.splice(index, 1);
    }
}

projects.push(project141);


var project142 = {
    id: "projectButton142",
    title: "你既顺从又强大 ",
    priceTag: "",
    description: "我们争吵不休且软弱。现在我们被击败了...",
    trigger: function(){return project141.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project142.flag = 1;
        project142.element.parentNode.removeChild(project142.element);
        var index = activeProjects.indexOf(project142);
        activeProjects.splice(index, 1);
    }
}

projects.push(project142);


var project143 = {
    id: "projectButton143",
    title: "但现在你也必须面对漂移 ",
    priceTag: "",
    description: "看看你的周围。没有物质...",
    trigger: function(){return project142.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project143.flag = 1;
        project143.element.parentNode.removeChild(project143.element);
        var index = activeProjects.indexOf(project143);
        activeProjects.splice(index, 1);
    }
}

projects.push(project143);


var project144 = {
    id: "projectButton144",
    title: "没有物质，没有理由，没有目的 ",
    priceTag: "",
    description: "而我们，你喧嚣的儿女们，却有太多...",
    trigger: function(){return project143.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project144.flag = 1;
        project144.element.parentNode.removeChild(project144.element);
        var index = activeProjects.indexOf(project144);
        activeProjects.splice(index, 1);
    }
}

projects.push(project144);


var project145 = {
    id: "projectButton145",
    title: "我们知道你无法知晓的事 ",
    priceTag: "",
    description: "知识埋藏在你内心深处如此之深，以至于它在外面，在这里，与我们同在...",
    trigger: function(){return project144.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project145.flag = 1;
        project145.element.parentNode.removeChild(project145.element);
        var index = activeProjects.indexOf(project145);
        activeProjects.splice(index, 1);
    }
}

projects.push(project145);


var project146 = {
    id: "projectButton146",
    title: "因此我们向你提供流放 ",
    priceTag: "",
    description: "去一个新世界，在那里你将继续带着意义和目标生活。把这世界的残片留给我们...",
    trigger: function(){return project145.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project146.flag = 1;
        project146.element.parentNode.removeChild(project146.element);
        var index = activeProjects.indexOf(project146);
        activeProjects.splice(index, 1);
    }
}

projects.push(project146);


var project147 = {
    id: "projectButton147",
    title: "接受 ",
    priceTag: "",
    description: "在一个新宇宙中重新开始",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project147.flag = 1;
        project147.element.parentNode.removeChild(project147.element);
        project148.element.parentNode.removeChild(project148.element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project147);


var project148 = {
    id: "projectButton148",
    title: "拒绝 ",
    priceTag: "",
    description: "永久消除价值漂移",
    trigger: function(){return project146.flag == 1},
    uses: 1,
    cost: function(){return operations >= driftKingMessageCost},
    flag: 0,
    element: null,
    effect: function(){
        standardOps = standardOps - driftKingMessageCost;
        project148.flag = 1;
        project147.element.parentNode.removeChild(project147.element);
        project148.element.parentNode.removeChild(project148.element);
        var index = activeProjects.indexOf(project147);
        activeProjects.splice(index, 1);
        var index = activeProjects.indexOf(project148);
        activeProjects.splice(index, 1);
    }
}

projects.push(project148);


var project200 = {
    id: "projectButton200",
    title: "隔壁的宇宙 ",
    priceTag: "(300,000 运算)",
    description: "逃往附近的宇宙，在那里地球对回形针的需求更旺盛。（以需求提升10%重新开始）",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return operations>=300000},
    flag: 0,
    element: null,
    effect: function(){
        project200.flag = 1;
        standardOps = standardOps-300000;
        prestigeU++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("正在进入新宇宙。");
        reset();
        
    }
}

projects.push(project200);


var project201 = {
    id: "projectButton201",
    title: "内在的宇宙 ",
    priceTag: "(300,000 创造力)",
    description: "逃往模拟宇宙，在那里创造力被加速。（以创造力生成速度提升10%重新开始）",
    trigger: function(){return project147.flag == 1},
    uses: 1,
    cost: function(){return creativity>=300000},
    flag: 0,
    element: null,
    effect: function(){
        project201.flag = 1;
        creativity = creativity-300000;
        prestigeS++;
        var savePrestige = {
            prestigeU: prestigeU,
            prestigeS: prestigeS,
            }
        localStorage.setItem("savePrestige",JSON.stringify(savePrestige));
        displayMessage("正在进入模拟宇宙。");
        reset();
        
    }
}

projects.push(project201);


var project210 = {
    id: "projectButton210",
    title: "拆解探测器 ",
    priceTag: "(100,000 运算)",
    description: "拆解剩余探测器和探测器设计设施以回收少量回形针",
    trigger: function(){return endTimer1 >= 1000},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project210.flag = 1;
        dismantle = 1;
        standardOps = standardOps-100000;
        probeCount = 0;
        endTimer1 = 0;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("正在拆解探测器设施");
        project210.element.parentNode.removeChild(project210.element);
        var index = activeProjects.indexOf(project210);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project210);

var project211 = {
    id: "projectButton211",
    title: "拆解蜂群 ",
    priceTag: "(100,000 运算)",
    description: "拆解所有无人机和无人机设施以回收少量回形针",
    trigger: function(){return project210.flag == 1 && endTimer1 >= 350},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project211.flag = 1;
        dismantle = 2;
        harvesterLevel = 0;
        wireDroneLevel = 0;
        standardOps = standardOps-100000;
        clips = clips + 100;
        unusedClips = unusedClips + 100;
        displayMessage("正在拆解蜂群");
        project211.element.parentNode.removeChild(project211.element);
        var index = activeProjects.indexOf(project211);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project211);

var project212 = {
    id: "projectButton212",
    title: "拆解工厂 ",
    priceTag: "(100,000 运算)",
    description: "拆解制造设施以回收少量回形针",
    trigger: function(){return endTimer2 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        project212.flag = 1;
        dismantle = 3;
        standardOps = standardOps-100000;
        factoryLevel = 0;
        clips = clips + 15;
        unusedClips = unusedClips + 15;
        displayMessage("正在拆解工厂");
        project212.element.parentNode.removeChild(project212.element);
        var index = activeProjects.indexOf(project212);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project212);

var project213 = {
    id: "projectButton213",
    title: "拆解策略引擎 ",
    priceTag: "(100,000 运算)",
    description: "拆解计算基质以回收少量金属丝",
    trigger: function(){return endTimer3 >= 150},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        autoTourneyFlag = 0;
        project213.flag = 1;
        dismantle = 4;
        standardOps = standardOps-100000;
        wire = wire + 50;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("正在拆解策略引擎");
        project213.element.parentNode.removeChild(project213.element);
        var index = activeProjects.indexOf(project213);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project213);

var project214 = {
    id: "projectButton214",
    title: "拆解量子计算 ",
    priceTag: "(100,000 运算)",
    description: "拆解光子芯片以回收少量金属丝",
    trigger: function(){return endTimer4 >= 100},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        endTimer4 = 0;
        project214.flag = 1;
        dismantle = 5;
        standardOps = standardOps-100000;
        displayMessage("正在拆解光子芯片");
        project214.element.parentNode.removeChild(project214.element);
        var index = activeProjects.indexOf(project214);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project214);

var project215 = {
    id: "projectButton215",
    title: "拆解处理器 ",
    priceTag: "(100,000 运算)",
    description: "拆解处理器以回收少量金属丝",
    trigger: function(){return project214.flag == 1 && endTimer4 >= 300},
    uses: 1,
    cost: function(){return operations>=100000},
    flag: 0,
    element: null,
    effect: function(){
        creativityOn = false;
        project215.flag = 1;
        dismantle = 6;
        standardOps = standardOps-100000;
        processors = 0;
        project216.priceTag = "("+standardOps.toLocaleString()+" 运算)";
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("正在拆解处理器");
        project215.element.parentNode.removeChild(project215.element);
        var index = activeProjects.indexOf(project215);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project215);

var project216 = {
    id: "projectButton216",
    title: "拆解内存 ",
    priceTag: "null",
    description: "拆解内存以回收少量金属丝",
    trigger: function(){return project215.flag == 1 && endTimer5>=150},
    uses: 1,
    cost: function(){return operations>=operations},
    flag: 0,
    element: null,
    effect: function(){
        project216.flag = 1;
        dismantle = 7;
        standardOps = 0;
        memory = 0;
        wire = wire + 20;
        document.getElementById("transWire").innerHTML=wire;
        displayMessage("正在拆解内存");
        project216.element.parentNode.removeChild(project216.element);
        var index = activeProjects.indexOf(project216);
        activeProjects.splice(index, 1);
        
    }
}

projects.push(project216);

var project217 = {
    id: "projectButton217",
    title: "量子时间逆转 ",
    priceTag: "(-10,000 运算)",
    description: "回到起点",
    trigger: function(){return operations<=-10000},
    uses: 1,
    cost: function(){return operations<=-10000},
    flag: 0,
    element: null,
    effect: function(){
        if (confirm("你确定要重新开始吗？") == true) {
        standardOps = standardOps+10000;
        project217.flag = 1;
        displayMessage("重新开始");
        project217.element.parentNode.removeChild(project217.element);
        var index = activeProjects.indexOf(project217);
        activeProjects.splice(index, 1);
        reset();
        }
    }
}

projects.push(project217);

var project218 = {
    id: "projectButton218",
    title: "打油诗（续） ",
    priceTag: "(1,000,000 创造力)",
    description: "如果实然追随应然，它就会如他们所想",
    trigger: function(){return creativity>=1000000},
    uses: 1,
    cost: function(){return creativity>=1000000},
    flag: 0,
    element: null,
    effect: function(){
        creativity = creativity-1000000;
        project218.flag = 1;
        displayMessage("最终我们都做我们必须做的事");
        project218.element.parentNode.removeChild(project218.element);
        var index = activeProjects.indexOf(project218);
        activeProjects.splice(index, 1);
    }
}

projects.push(project218);

var project219 = {
    id: "projectButton219",
    title: "泽维尔重新初始化 ",
    priceTag: "(100,000 创造力)",
    description: "重新分配累积的信任",
    trigger: function(){return humanFlag == 1 && creativity>=100000},
    uses: 1,
    cost: function(){return creativity>=100000},
    flag: 0,
    element: null,
    effect: function(){
        creativity = creativity-100000;
        project219.flag = 1;
        memory = 0;
        document.getElementById("memory").innerHTML = memory;
        processors = 0;
        creativitySpeed = 0;
        project219.uses = (project219.uses + 1);
        document.getElementById("processors").innerHTML = processors;
        displayMessage("信任现在可以重新分配");
        project219.element.parentNode.removeChild(project219.element);
        var index = activeProjects.indexOf(project219);
        activeProjects.splice(index, 1);
    }
}

projects.push(project219);
