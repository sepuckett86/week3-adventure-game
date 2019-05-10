const quest1 = {
    id: 'kitchen',
    title: 'Kitchen',
    description: `You enter the kitchen, to scope out 
        the activity and to grab yourself a seltzer. 
        Due to the large amount of people your parents 
        have invited, there are several groups congregating 
        here. You listen and observe for a few seconds before 
        joining or initiating a conversation. With whom do 
        you chat?`,
    image: './assets/kitchen.jpg',
    audio: '',
    activeAudio: '',
    choices: [{
        id: 'parent-friends',
        description: `A group of your parents' friends 
            who are laughing loudly about something.`,
        result: `You go and join the group, feeling the 
            generational age gap. They are pretty funny, 
            though so you laugh at their jokes.`,
        energy: -10,
        happiness: 10
    }, {
        id: 'co-worker',
        description: `"...I am so tired of my boss!" Your 
            co-worker is talking.`,
        result: `You join your co-worker's conversation. 
            It is all about negative things about work. 
            What a downer.`,
        energy: -30,
        happiness: 0
    }, {
        id: 'cousins',
        description: `"...I love flamenco! Such a fun dance..." 
            Your cousins are talking.`,
        result: `You join the dance conversation. It’s pretty 
            interesting.`,
        energy: -5,
        happiness: 10
    }, {
        id: 'unknown',
        description: `Unknown guests, who are currently 
            standing silently in a corner looking awkward.`,
        result: `You have to spend a lot of energy trying to 
            be an engaging host and inquiring about who they 
            are. They turn out to be your brother's friends, 
            so that's good to know.`,
        energy: -10,
        happiness: 5
    }]
};

const quest2 = {
    id: 'livingRoom',
    title: 'Living Room',
    description: `You decide to go to the living room, the 
        largest room in the house. While you hoped to get some 
        space, it seems as though the majority of people had the 
        same idea. And they happen to be in the midst of a game 
        of charades. They call out, "Join us!" What do you do?`,
    image: './assets/living-room.jpg',
    audio: '',
    activeAudio: '',
    choices: [{
        id: 'volunteer',
        description: `Smile and say, "sure!" Volunteer to 
            go next.`,
        result: `You decide to go for it, and it does turn out 
            to be fun. However, you do stress a lot about what to 
            act out, and doing the acting.`,
        energy: -25,
        happiness: 20
    }, {
        id: 'participate',
        description: `Smile and say, "ok!" Participate in guessing.`,
        result: `You want to participate but not have a lot of 
            attention on you. This was a good move.`,
        energy: -10,
        happiness: 20
    }, {
        id: 'sit',
        description: `Scowl and shake your head, "no." Sit and 
            watch in the back.`,
        result: `Ugh, the thought of going in front of everyone 
            is pretty unpleasant, but you want to still spend 
            time with these people you know and love.`,
        energy: -5,
        happiness: 10
    }, {
        id: 'leave',
        description: `Scowl and shake your head, "no." Leave 
            as soon as possible.`,
        result: `You are somewhat rude, and this doesn’t make you 
            feel good about yourself. However, you only lose a 
            tiny bit of energy.`,
        energy: -5,
        happiness: 0
    }]
};

const quest3 = {
    id: 'patio',
    title: 'Patio',
    description: `You decide to explore the patio to get some fresh 
        air. You feel great until you hear a group of your family 
        calling you over. "You're a year older now, time for a speech!" 
        yells your brother. He knows you hate giving speeches. What 
        do you do?`,
    image: './assets/patio.jpg',
    audio: '',
    activeAudio: '',
    choices: [{
        id: 'speech',
        description: `Quickly think of something to remark on that 
            is clever and eloquent and will make everyone laugh.`,
        result: `You stutter and stumble as you try to put your 
            genius ideas into real words. Embarrassed, you turn 
            red and your brother laughs. "Don’t worry, dear, you 
            don't have to give a speech," consoles your grandmother. 
            That makes it even worse.`,
        energy: -40,
        happiness: 0
    }, {
        id: 'excuse',
        description: `Use the "it's my birthday, I can do what I 
            want to" excuse to not give a speech.`,
        result: `You say this, and it's highly effective. "That's right! 
            It’s your day to enjoy!" Says your grandmother. You smile, 
            thankfully. Soon the conversation moves on, and you feel the 
            joy of being loved.`,
        energy: 0,
        happiness: 10
    }, {
        id: 'question',
        description: `Ask the question "do I have to?" to your talkative 
            grandmother.`,
        result: `Strategically engaging the person you know will take over 
            the spotlight, you draw your grandmother into the conversation. 
            Soon, everyone is focused on her elaborate stories of her pilates 
            classes and not on your non-existent speech. You stand in the back, 
            listening, while still feeling like a part of the group. Although 
            her story does go a bit long.`,
        energy: -10,
        happiness: 10
    }]
};

const quests = [quest1, quest2, quest3];

export default quests;