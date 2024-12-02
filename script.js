// Donation data
let donoCount = 0;
let donoMilestones = [];



//Images
const donationImages = [{
        threshold: 0,
        url: "https://c.tenor.com/wVffZ201Z9UAAAAC/tenor.gif"
    }, {
        threshold: 100,
        url: "https://cdn.discordapp.com/attachments/730030449329569806/1312291619973890139/trump.gif?ex=674d47cf&is=674bf64f&hm=d0692caf263274bef2211fabc85bb414acbd1b1b108fb67b509059a19992d471&"
    }, {
        threshold: 150,
        url: "https://cdn.discordapp.com/attachments/730030449329569806/1312295804928524318/frieren-sousou-no-frieren-ezgif.com-resize.gif?ex=674d4bb5&is=674bfa35&hm=97ade116a1123ff5f0eeded77c11386e35d948c45e441ad40b4fbf79d70bd7ef&"
    }, {
        threshold: 200,
        url: "https://cdn.7tv.app/emote/01FRRFH9M800085N93FNKSAH9H/4x.webp"
    }, {
        threshold: 250,
        url: "https://media1.tenor.com/m/XbMA2N11cMAAAAAd/cat-side-eye.gif"
    }, {
        threshold: 300,
        url: "https://cdn.7tv.app/emote/01GRFW2MX8000EZD3QABKW70JZ/4x.webp"
    }, {
        threshold: 400,
        url: "https://media1.tenor.com/m/_GF7wBzy0-oAAAAd/smile-precure-kise-yayoi.gif&"
    }, {
        threshold: 500,
        url: "https://cdn.7tv.app/emote/01J2MTX3Z0000D08M7X51E8CWJ/4x.webp"
    }, {
        threshold: 600,
        url: "https://cdn.discordapp.com/attachments/730030449329569806/1312295834938773534/streaming-ezgif.com-resize.gif?ex=674d4bbc&is=674bfa3c&hm=7df2c58aedf3bf57bd2e9b3dba65e75ec61a4a674765020801b5fad6efe0b349&"
    }, {
        threshold: 800,
        url: "https://c.tenor.com/zwU22reEGfAAAAAd/tenor.gif"
    }, {
        threshold: 1000,
        url: "https://cdn.7tv.app/emote/01GR2ZWC1G00004Y5HVCHEMX8H/4x.webp"
    }, {
        threshold: 1250,
        url: "https://c.tenor.com/vjLLkjTTPXQAAAAd/tenor.gif"
    }, {
        threshold: 1500,
        url: "https://c.tenor.com/QU0L7ouTqdwAAAAd/tenor.gif"
    }, {
        threshold: 1750,
        url: "https://cdn.discordapp.com/attachments/730030449329569806/1312807019517972530/ezgif.com-crop_29.gif?ex=674dd650&is=674c84d0&hm=a3827494d9a18ba056fcb38d3c06eff4272d40b6e61020a9047a9c03b6005b48&"
    }, {
        threshold: 2000,
        url: "https://cdn.discordapp.com/attachments/1157104039880835102/1312305409268125746/Vegeta_2_online-video-cutter.com.gif?ex=674d54a7&is=674c0327&hm=610caa25ad9564b9a2ed1bc3c26ce51aac1bf3a32ef91b0b63c3844025df878d&"
    }, {
        threshold: 2500,
        url: "https://c.tenor.com/h2xvRpDeSIEAAAAd/tenor.gif"
    }, {
        threshold: 2750,
        url: "https://c.tenor.com/gKlgTZL1BEMAAAAd/tenor.gif"
    }, {
        threshold: 3000,
        url: "https://c.tenor.com/2q_UknLBc7wAAAAd/tenor.gif"
    }, {
        threshold: 3250,
        url: "https://cdn.discordapp.com/attachments/1157104039880835102/1312307899334262835/family_online-video-cutter.com.gif?ex=674d56f8&is=674c0578&hm=116a7e0b56b29194539db4532abeba7eaf9eeaac507cf060f5b94cfa8ac224d9&"
    }, {
        threshold: 3500,
        url: "https://c.tenor.com/AA28lT39Iw8AAAAd/tenor.gif"
    }, {
        threshold: 3750,
        url: "https://c.tenor.com/npyHSoI--FgAAAAd/tenor.gif"
    }, {
        threshold: 4000,
        url: "https://cdn.7tv.app/emote/01J9FCY3N8000D15QN0BDGP9B3/4x.webp"
    }, {
        threshold: 4100,
        url: ""
    }, //SING MOI MOI
    {
        threshold: 4200,
        url: ""
    }, // MAKE YOUTUBE VIDS
    {
        threshold: 4300,
        url: ""
    }, //BUILD A PC
    {
        threshold: 4500,
        url: "https://c.tenor.com/ENTI0gtz8pAAAAAd/tenor.gif"
    }, {
        threshold: 5000,
        url: ""
    }, //DARK SOULS
    {
        threshold: 6000,
        url: "https://media1.tenor.com/m/kHrKtvfduh4AAAAd/onewism-kiwiyuno.gif"
    }, {
        threshold: 9999,
        url: "https://cdn.7tv.app/emote/01HMD5KG0G00070FCM1Q64Q9J8/4x.webp"
    }, {
        threshold: 10000,
        url: "https://cdn.discordapp.com/attachments/730030449329569806/1312298637300076584/flower-unzip-ezgif.com-resize.gif?ex=674d4e58&is=674bfcd8&hm=f923b9c8628877aca8325cf6d1fb81a9d9b3eab956c6a37141d6263296c57bdd&"
    }, {
        threshold: 15000,
        url: "https://cdn.7tv.app/emote/01JDRWWX512QAFB02DPNJBV5G8/4x.gif"
    }
];

// Timer in seconds
let timeLeft = 0;
let timerTick = undefined;
// Pause and resume for when sleepge
let paused = false;
const pauseResumeBtn = document.getElementById('pause-resume-btn');

// Sub conversion for subs, bits, and tips
let t1SubValue = 1;
let t2SubValue = 1;
let t3SubValue = 1;
let bitsSubValue = 0;
let tipsSubValue = 0;
let cumulativeBits = 0;
let cumulativeTips = 0;

// Testing values
let simulateSubs = 0;
let simulateTip = 0;
let simulateBits = 0;

// Number of milestones to show
let slidingWindow = 3;

let previousHighestGoal = -1;
let activeGoals = [];


// Time conversion for subs, bits, and tips in minutes
let t1TimeValue = 3;
let t2TimeValue = 6;
let t3TimeValue = 9;
let bitsTimeValue = 5;
let tipsTimeValue = 5;

let timerStartCommand, timerEndCommand, goalUpdateCommand, goalAddCommand, goalFadedBackground, goalFadedColor, goalLineColor;

let testStart, testStop, testUserStop, testUpdateGoal, testAddGoal;

let colorForLastGoals;
let cockInTheAss = document.getElementById('donation-goals-list');

//main coainer
const eventInfoContainer = document.querySelector("#event-info-container");

//check initial load finished
//let finishedLoading = false;

function togglePauseResume() {
    paused = !paused;
    if (paused) {
        clearInterval(timerTick);
        timerTick = undefined;
        // If paused, stop the timer
        pauseResumeBtn.textContent = 'Resume'; // Change button text
    } else {
        timerTick =
            setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft -= 1;
                    setTime(timeLeft);
                }
            }, 1000);
        // If resumed, continue the timer
        pauseResumeBtn.textContent = 'Pause'; // Change button text
    }
}


pauseResumeBtn.addEventListener('click', togglePauseResume);

window.addEventListener('onWidgetLoad', function(obj) {

    let fieldData = obj.detail.fieldData;

    goalFadedBackground = fieldData.goalFadedBackground;
    colorForLastGoals = goalFadedBackground;
    goalFadedColor = fieldData.goalFadedColor;
    goalLineColor = fieldData.goalLineColor;

    var goalsProgressElement = document.getElementById('event-name');
    goalsProgressElement.textContent = fieldData.eventName;

    var goalsProgressElement = document.getElementById('donation-goal');
    goalsProgressElement.textContent = 0;

    donationGoalValues = fieldData.donationGoalValues.split(',').map(Number);
    donationGoalNames = fieldData.donationGoalNames.split(',');
    donoMilestones = donationGoalValues.map((value, index) => ({
        value,
        name: donationGoalNames[index] || '',
        achieved: false
    }));

    t1SubValue = fieldData.t1SubValue;
    t2SubValue = fieldData.t2SubValue;
    t3SubValue = fieldData.t3SubValue;
    //console.log(t3SubValue , "COCK2")
    bitsSubValue = fieldData.bitsSubValue;
    tipsSubValue = fieldData.tipsSubValue;

    t1TimeValue = fieldData.t1TimeValue;
    t2TimeValue = fieldData.t2TimeValue;
    t3TimeValue = fieldData.t3TimeValue;
    bitsTimeValue = fieldData.bitsTimeValue;
    tipsTimeValue = fieldData.tipsTimeValue;

    if (!fieldData.showTime) {
        $('#timer, #event-name').hide();
        $('#event-details').css({
            justifyContent: 'center',
        });
    }

    simulateSubs = fieldData.simulateSubs;
    simulateBits = fieldData.simulateBits;
    simulateTip = fieldData.simulateTip;

    if (simulateSubs + simulateBits + simulateTip > 0) {
        if (simulateSubs) {
            donoCount += t1SubValue * simulateSubs;
            timeLeft += t1TimeValue * simulateSubs * 60;
        }
        if (simulateBits) {
            donoCount += Math.floor(simulateBits / bitsSubValue);
            timeLeft = (simulateTip / 5) * bitsTimeValue * 60;
        }
        if (simulateTip) {
            donoCount += Math.floor(simulateTip / tipsSubValue);
            timeLeft = (simulateBits / 500) * tipsTimeValue * 60;
        }
    } else {
        donoCount += fieldData.startSubs;
        timeLeft += fieldData.startTime * 60;
    }
    populateInitialMilestones();
    updateMilestonesAchieved(donoCount);
    updateBackgroundImageWithFade(donoCount);
    setTime(timeLeft);
});


const emotes = [
    "01HPRH2DT00000X4ZG70YHEZHT", // INSANE
    "01F12P9KYG0009V7MP006J8KRF", // OhShit
    "01G4ZHV228000B2BBGEQH5KFJK", // WidePogCrazy
    "01GFW1BAK80001VXKTCH0VEANC", // HOLY
    "01J5PXJXQG000CDPBQWFAR9ZR4", // WAHOO
    "01HAGQA0VR000CK4GBCA21BZ37", // CutePog
    "01HB7ZMVZR00072K8QAE93K1NP" // 83
];

function getImageForDonation(donoCount) {

    const matchingThreshold = donationImages
        .slice()
        .reverse()
        .find(image => donoCount >= image.threshold);


    return matchingThreshold ? matchingThreshold.url : "https://c.tenor.com/wVffZ201Z9UAAAAC/tenor.gif";
}


function checkIfEnded() {
    if (donoCount >= 12500) {

        console.log("This is cock in the ass: " + cockInTheAss[2]);
        cockInTheAss.childNodes[2].style.background = colorForLastGoals;
    }

}


function preloadImage(url, callback) {
    const img = new Image();
    img.src = url;
    img.onload = () => callback();
}

function updateBackgroundImageWithFade(donoCount) {
    const imageUrl = getImageForDonation(donoCount);
    preloadImage(imageUrl, () => {

        eventInfoContainer.classList.add("fade-out");


        setTimeout(() => {
            eventInfoContainer.style.backgroundImage = `url("${imageUrl}")`;


            eventInfoContainer.classList.remove("fade-out");
        }, 500);
    });
}



async function updateMilestones() {
    var goalsListElement = document.getElementById('donation-goals-list');
    let highestAchievedGoal = -1;
    for (let i = 0; i < donoMilestones.length; i++) {
        let goal = donoMilestones[i];
        if (goal.achieved) {
            highestAchievedGoal = i;
        }
    }
    if (highestAchievedGoal == previousHighestGoal) {
        // should never come here.
        return;
    }

    var goalsProgressElement = document.getElementById('donation-goal');
    var nextGoal = (donoMilestones.length > highestAchievedGoal) + 1 ? donoMilestones[highestAchievedGoal + 1].value : "?";
    goalsProgressElement.textContent = nextGoal


    while (previousHighestGoal < highestAchievedGoal) {
        previousHighestGoal++
        let completedGoal;
        if (previousHighestGoal === 0) {
            completedGoal = goalsListElement.childNodes[0];
        } else if (previousHighestGoal === donoMilestones.length - 1) {
            completedGoal = goalsListElement.childNodes[2];
        } else {
            completedGoal = goalsListElement.childNodes[1];
        }

        new Promise(resolve => {
            $(completedGoal).animate({
                backgroundColor: goalFadedBackground,
                color: goalFadedColor,
            }, 'normal', resolve);
        });
        if (previousHighestGoal > 0 &&
            previousHighestGoal + slidingWindow <= donoMilestones.length) {
            await slide(donoMilestones[previousHighestGoal + slidingWindow - 1]);
        }
    }
}


function spawnEmote() {
    const emoteId = emotes[Math.floor(Math.random() * emotes.length)];

    const emoteImg = document.createElement("img");
    emoteImg.src = `https://cdn.7tv.app/emote/${emoteId}/3x.webp`;
    emoteImg.classList.add("floating-emote");


    const containerElement = document.getElementById("container");
    const containerWidth = containerElement.offsetWidth;


    const minX = containerWidth * 0.30;
    const maxX = containerWidth * 0.70;
    const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;


    const emoteWidth = 100;
    emoteImg.style.left = `${randomX - emoteWidth / 2}px`;


    const donationGoalElement = document.getElementById("donation-goal");
    donationGoalElement.appendChild(emoteImg);


    $(emoteImg).animate({
        opacity: 1
    }, 500);


    setTimeout(() => {
        $(emoteImg).animate({
            opacity: 0,
            top: "-100px"
        }, 1500, () => {
            emoteImg.remove();
        });
    }, 500);
}



window.addEventListener('onEventReceived', function(obj) {
    const event = obj.detail.event;
    if (event.listener === 'widget-button') {
        if (event.field === 'test1') {
            window.dispatchEvent(testStart);
        } else if (event.field === 'test2') {
            window.dispatchEvent(testStop);
        } else if (event.field === 'test3') {
            window.dispatchEvent(testUserStop);
        } else if (event.field === 'test4') {
            window.dispatchEvent(testUpdateGoal);
        } else if (event.field === 'test5') {
            window.dispatchEvent(testAddGoal);
        }
        return;
    }
    let timeToAdd = 0;
    const listener = obj.detail.listener;
    switch (listener) {
        case 'subscriber-latest':
            let amount = 1;
            if (event.bulkGifted) amount = event.amount;
            const tier = event.tier;
            //console.log("Details:" , tier , amount)
            if (amount != 1) {
                // Do nothing since first round is sub amounnt by gifter
                console.log("im in the thick of it")
            } else if (tier === "2000" || tier === 2000) {
                if (t2SubValue) donoCount += t2SubValue * amount;
                if (t2TimeValue) timeToAdd = Math.round(t2TimeValue * amount * 60);
            } else if (tier === "3000" || tier === 3000) {
                if (t3SubValue) donoCount += t3SubValue * amount;
                if (t3TimeValue) timeToAdd = Math.round(t3TimeValue * amount * 60);
            } else {
                // default T1
                donoCount += t1SubValue * amount;
                if (t1TimeValue) timeToAdd = Math.round(t1TimeValue * amount * 60);
            }
            break;
        case 'cheer-latest':
            const bits = event.amount;
            if (bitsSubValue) {
                cumulativeBits += bits;
                donoCount += Math.floor(cumulativeBits / bitsSubValue);
                cumulativeBits %= bitsSubValue;
            }
            if (bitsTimeValue) {
                timeToAdd = Math.round((bits / 500) * bitsTimeValue * 60);
            }
            break;
        case 'tip-latest':
            const dollars = event.amount;
            if (tipsSubValue) {
                cumulativeTips += dollars;
                donoCount += Math.floor(cumulativeTips / tipsSubValue);
                cumulativeTips %= tipsSubValue;
            }
            if (tipsTimeValue) {
                timeToAdd = Math.round((dollars / 5) * tipsTimeValue * 60);
            }
            break;
        case 'message':
            let data = event.data;

            if (!isModerator(data)) break;
            if (data.text.startsWith(timerStartCommand)) {
                stopTimer = false;
            } else if (data.text.includes(timerEndCommand)) {
                stopTimer = true;
            } else if (data.text.includes(goalUpdateCommand)) {
                const newGoal = data.text.split(' ')[1];
                if (newGoal) {
                    document.getElementById('donation-goal').textContent = newGoal;
                }
            } else if (data.text.includes(goalAddCommand)) {

                let regex = /'([^']*)'|\S+/g;
                let parsed = [...data.text.matchAll(regex)].map(m => m[1] ? m[1] : m[0]);
                if (parsed.length === 3) {
                    const newGoalName = parsed[1];
                    const newGoalValue = parseInt(parsed[2]);
                    const exists = donoMilestones.some(goal => goal.name === newGoalName || goal.value === newGoalValue);
                    console.log(exists);
                    if (!exists) {
                        const newMilestone = {
                            value: newGoalValue,
                            name: newGoalName,
                            achieved: false
                        };
                        donoMilestones.push(newMilestone);


                        if (previousHighestGoal < donoMilestones.length - 3) return;

                        console.log('New goal added:', newGoalName, newGoalValue);
                        slide(newMilestone);
                    } else {
                        console.log('Milestone already exists:', newGoalName, newGoalValue);
                    }
                }
            }
            return;
    }

    if (listener === 'subscriber-latest' || listener === 'cheer-latest' || listener === 'tip-latest') {
        spawnEmote();
    }

    updateMilestonesAchieved(donoCount);
    updateBackgroundImageWithFade(donoCount);
    timeLeft += timeToAdd;
    timeLeft = Math.floor(timeLeft);
    setTime(timeLeft);
    checkIfEnded();
});

function updateMilestonesAchieved(count) {
    let milestoneChanged = false;
    donoMilestones.forEach(function(goal) {
        if (count >= goal.value && !goal.achieved) {
            goal.achieved = true;
            milestoneChanged = true;
        }
    });

    updateGoalsDisplay();
    if (milestoneChanged) {
        updateMilestones();
    }
}

function updateGoalsDisplay() {
    var goalsProgressElement = document.getElementById('donation-progress');
    goalsProgressElement.textContent = donoCount;
}

function populateInitialMilestones() {
    var goalsListElement = document.getElementById('donation-goals-list');

    let highestAchievedIndex = donoMilestones.findIndex(goal => !goal.achieved);
    if (highestAchievedIndex === -1) highestAchievedIndex = donoMilestones.length - 1;

    let initialGoals = donoMilestones.slice(highestAchievedIndex, highestAchievedIndex + slidingWindow);
    initialGoals.forEach((goal) => {
        let goalElem = createGoal(goal);
        goalsListElement.appendChild(goalElem);
    });
    updateGoalsClasses();
}


async function slide(newMilestone) {
    var goalsListElement = document.getElementById('donation-goals-list');


    const removalPromise = new Promise(resolve => {
        $(goalsListElement.childNodes[0]).animate({
                height: 0,
                opacity: 0
            },
            200,
            function() {
                goalsListElement.removeChild(goalsListElement.childNodes[0]);
                resolve();
            }
        );
    });


    let goalElem = createGoal(newMilestone);
    goalElem.style.height = '0';
    goalElem.style.opacity = '0';


    goalsListElement.appendChild(goalElem);


    const additionPromise = new Promise(resolve => {
        $(goalElem).animate({
                opacity: 1,
                height: '100%'
            },
            200,
            resolve
        );
    });


    await Promise.all([removalPromise, additionPromise]);

    updateGoalsClasses();

}

function createGoal(goal) {
    let listItem = document.createElement('div');
    listItem.classList.add('goal-item');
    let goalItem = document.createElement('div');
    goalItem.classList.add('inline-container');

    let goalName = document.createElement('div');
    goalName.textContent = goal.name;
    goalName.classList.add('text-left');
    let goalValue = document.createElement('div');
    goalValue.textContent = goal.value;
    goalValue.classList.add('text-right');

    goalItem.appendChild(goalName);
    goalItem.appendChild(goalValue);

    listItem.appendChild(goalItem);
    console.log("List item goal " + listItem);
    return listItem;
}

function updateGoalsClasses() {
    const goalsListElement = document.getElementById('donation-goals-list');
    const goalItems = goalsListElement.children;

    // Ensure there are goals to update
    if (goalItems.length === 0) return;

    // Reset all items to the default class
    Array.from(goalItems).forEach(goal => {
        goal.classList.add('goal-item'); // Ensure the default class is applied
    });

    // Find and update the middle goal
    const middleIndex = Math.floor(goalItems.length / 2);
    const middleGoal = goalItems[middleIndex];

}



function createStrikethroughImg() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    svg.setAttribute('width', '0%');
    line.setAttribute('x1', '2%');
    line.setAttribute('y1', '0');
    line.setAttribute('x2', '98%');
    line.setAttribute('y2', '0');
    line.style.stroke = goalLineColor;
    line.style.strokeWidth = "6";
    svg.appendChild(line);
    svg.setAttribute("class", "overlay-image");
    svg.style.opacity = 0;
    return svg;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function setTime(totalTime) {

    document.getElementById('timer').textContent = formatTime(totalTime);
};

function formatTime(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60) % 60;
    var hours = Math.floor(totalSeconds / 3600);
    return hours.toString().padStart(2, '0') + ":" +
        minutes.toString().padStart(2, '0') + ":" +
        seconds.toString().padStart(2, '0') + "";
};

function isModerator(data) {
    let badges = data.tags.badges;
    if (badges.includes('broadcaster') || badges.includes('moderator')) {
        return true;
    }
    return false;
};


let backgroundChanged = false;

setInterval(() => {
    //if(!finishedLoading) return;

    updateMilestonesAchieved(donoCount);
    var goalsListElement = document.getElementById('donation-goals-list');
    var middleGoalElement = document.querySelector('.goal-item');
    var computedStyle = window.getComputedStyle(middleGoalElement);

    new Promise(resolve => {
        $(goalsListElement.childNodes[0]).animate({
            backgroundColor: goalFadedBackground,
            color: goalFadedColor,
        }, 'normal', resolve);
    });
    if (previousHighestGoal == 29) {
        let completedOne = goalsListElement.childNodes[0];
        let notCompletedOne = goalsListElement.childNodes[2]

        if (!backgroundChanged) {
            for (let property of computedStyle) {
                notCompletedOne.style[property] = computedStyle.getPropertyValue(property);
            }
            backgroundChanged = true;
        }


        middleGoalElement.style.background = colorForLastGoals;

        new Promise(resolve => {
            $(completedOne).animate({
                backgroundColor: goalFadedBackground,
                color: goalFadedColor,
            }, 'normal', resolve);
        });
        middleGoalElement.appendChild(img);
        new Promise(resolve => {
            $(img).animate({
                opacity: 1,
                width: '100%',
            }, 'normal', resolve);
        });
        new Promise(resolve => {
            $(middleGoalElement).animate({
                backgroundColor: goalFadedBackground,
                color: goalFadedColor,
            }, 'normal', resolve);
        });

    }
}, 3000);


timerTick = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft -= 1;
        setTime(timeLeft);
    }
}, 1000);