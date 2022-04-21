const localQuotes = [
  {
    text: 'True delight is in the finding out rather than in the knowing.',
    author: 'Isaak Asimov'
  },
  {
    text: 'Results make up only a small fraction of life. The vast majority of life is the process.',
    author: 'Brad Stulberg'
  },
  {
    text: 'Some man may succeed because they are destined to, but most man succeed because they are determined to.',
    author: 'Henry Ford'
  },
  {
    text: 'Waste is any human activity which absorbs resources but creates no value.',
    author: 'J.P. Womak'
  },
  {
    text: 'Those who try to make life better for everyone without having learned to control their own lives first, usually end up making things worse all around.',
    author: 'Mihaly Csikszentmihalyi'
  },
  {
    text: 'Act as though it were impossible to fail.',
    author: 'Dorothea Brande'
  },
  {
    text: 'Have the courage to act instead of react.',
    author: 'Oliver Wendell Holmes, Sr.'
  },
  {
    text: 'I could have missed the pain, but I would have had to miss the dance.',
    author: 'Garth Brooks'
  },
  {
    text: "A moment insights is sometimes worth a life's experience.",
    author: 'Oliver Wendell Holmes, Sr.'
  },
  {
    text: 'If you want the best the world has to offer, offer the world your best.',
    author: 'Neale Donald Walsch'
  },
  {
    text: 'The brave do not live forever but the cautious do not live at all.',
    author: 'Meg Cabot'
  },
  {
    text: "I can accept failure, everyone fails at some point. But I can't accept not trying.",
    author: 'Michael Jordan'
  },
  {
    text: 'Nothing worth having comes easy.',
    author: 'Theodore Roosevelt'
  },
  {
    text: 'I walk slowly, but I never walk backward.',
    author: 'Abraham Lincoln'
  },
  {
    text: "Willpower allows you to do what you said you would do, when you said you would do it.",
    author: 'Robin Sharma'
  },
  {
    text: "The demon that you can swallow gives you its power, and the greater life’s pain, the greater life’s reply.",
    author: 'Joseph Campbell'
  },
  {
    text: 'It is not knowledge, but the act of learning, not possession but the act of getting there, which grants the greatest enjoyment.',
    author: 'Carl Friedrich Gauß'
  },
  {
    text: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison'
  },
  {
    text: 'A man who procrastinates in his choosing will inevitably have his choice made for him by circumstance.',
    author: ' Hunter S. Thompson'
  },
  {
    text: 'The only constant in life is change.',
    author: 'Heraclitus'
  },
  {
    text: 'Opportunity does not knock, it presents itself when you beat down the door.',
    author: 'Kyle Chandler'
  },
  {
    text: 'A mind is like a parachute. It does not work if it is not open.',
    author: 'Frank Zappa'
  },
  {
    text: 'They did not know it was impossible, so they did it.',
    author: 'Mark Twain'
  },
  {
    text: 'I am an old man and have known a great many troubles, but most of them never happened.',
    author: 'Mark Twain'
  },
  {
    text: "Life isn’t about finding yourself or finding anything, it's about creating yourself.",
    author: 'Bob Dylan'
  },
  {
    text: 'Time stays long enough for anyone who will use it.',
    author: ' Leonardo Da Vinci'
  },
  {
    text: 'Most people do not listen with the intent to understand, they listen with the intent to reply.',
    author: 'Stephen Covey'
  },
  {
    text: 'If your dreams do not scare you, they are not big enough.',
    author: 'Ellen Johnson Sirleaf'
  },
  {
    text: 'Eat a live frog first thing in the morning and nothing worse will happen to you for the rest of the day.',
    author: 'Mark Twain'
  },
  {
    text: "Your mind doesn't have the packages installed required to run this explanation.",
    author: "Youtube User 'IronCandy'"
  },
  {
    text: "It's easier to ask forgiveness than it is to get permission.",
    author: 'Grace Hopper'
  },
  {
    text: 'Disciplined people are better at structuring their lives in a way that does not require heroic willpower and self-control. In other words, they spend less time in tempting situations.',
    author: 'James Clear'
  },
  {
    text: 'Sometimes you will never know the value of a moment until it becomes a memory.',
    author: 'Dr. Seuss'
  },
  {
    text: 'The reason you can’t hear other people’s inner monologues of self-doubt isn’t that they don’t have them. It’s that you only have access to your own mind.',
    author: 'Oliver Burkeman'
  },
  {
    text: 'The world is complicated, Bar. That’s why it’s interesting.',
    author: "Stanley Ann Dunham"
  },
  {
    text: 'It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is most adaptable to change.',
    author: 'Charles Darwin'
  },
  {
    text: "We fail when we give up to soon. [...] We fail when we get distracted by tasks we don't have the guts to quit.",
    author: 'Seth Godin'
  },
  {
    text: "You have moments of happiness when things work out, but they don't last long, because then you're on to the next problem. So why do it at all? Because to the kind of people who like working this way, nothing else feels as right. You feel as if you're an animal in its natural habitat, doing what you were meant to do — not always happy, maybe, but awake and alive.",
    author: 'Paul Graham'
  },
  {
    text: 'I am always doing that which I can not do, in order that I may learn how to do it.',
    author: 'Pablo Picasso'
  },
  {
    text: 'Inspiration exists, but it has to find you working.',
    author: 'Pablo Picasso'
  },
  {
    text: 'Action may not always bring happiness, but there is no happiness without action.',
    author: 'Benjamin Disraeli'
  },
  {
    text: 'Life is a succession of lessons, which must be lived to be understood.',
    author: 'Ralph Emerson'
  },
  {
    text: 'There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.',
    author: 'Denis Waitley'
  },
  {
    text: "You got to be careful if you don't know where you're going, because you might not get there.",
    author: 'Yogi Berra'
  },
  {
    text: 'Conflict is an inevitable - and useful - part of life. It often leads to change and generates insight.',
    author: 'Roger Fisher'
  },
  {
    text: 'If they are not involved in the process, they are unlikely to approve.',
    author: 'Roger Fisher'
  },
  {
    text: 'The best performers set goals that are not about the outcome but about the process of reaching the outcome.',
    author: 'Geoff Colvin'
  },
  {
    text: "An apology means nothing if they don't stop doing what they are apologizing for. Believe actions, not words.",
    author: 'Mandy Hale'
  },
  {
    text: "Everything's in the mind. That's where it all starts. Knowing what you want is the first step toward getting it.",
    author: 'Mae West'
  },
  {
    text: "When it is obvious that the goals cannot be reached, don’t adjust the goals, adjust the action steps.",
    author: 'Confucius'
  },
  {
    text: 'In the middle of difficulty lies opportunity.',
    author: 'Albert Einstein'
  },
  {
    text: 'Success is the ability to go from one failure to another with no loss of enthusiasm.',
    author: 'Winston Churchill'
  },
  {
    text: "You may never know what results come of your actions, but if you do nothing, there will be no results",
    author: 'Mahatma Gandhi'
  },
  {
    text: 'Nothing is particularly hard if you divide it into small jobs.',
    author: 'Henry Ford'
  },
  {
    text: 'What you do today can improve all your tomorrows.',
    author: 'Ralph Marston'
  },
  {
    text: 'The mind is a wonderful servant but a terrible master.',
    author: 'Robin Sharma'
  },
  {
    text: 'Everything a man creates is always created twice, first in the mind and then in reality.',
    author: 'Robin Sharma'
  },
  {
    text: 'Mental mastery comes through conditioning, nothing more and nothing less.',
    author: 'Robin Sharma'
  },
  {
    text: 'A person who thinks all the time has nothing to think about except thoughts. So, he loses touch with reality and lives in a world of illusions.',
    author: 'Alan Watts'
  },
  {
    text: 'If it scares you it might be a good thing to try.',
    author: 'Seth Godin'
  },
  {
    text: "You’ll have a whole eternity to think inside the box.",
    author: 'Unknown'
  },
  {
    text: 'What you get by achieving your goals is not as important as what you become by achieving your goals.',
    author: 'Henry David Thoreau'
  },
  {
    text: "People are always blaming their circumstances for what they are. I don't believe in circumstances. The people who get on in this world are the people who get up and look for the circumstances they want, and if they can't find them, make them.",
    author: 'George Bernard Shaw'
  },
  {
    text: 'Those who face that which is actually before them, unburdened by the past, undistracted by the future, these are they who live, who make the best use of their lives; these are those who have found the secret of contentment',
    author: 'Alban Goodier'
  },
  {
    text: "You’ll never change your life until you change something you do daily. The secret of your success is found in your daily routine.",
    author: 'John C. Maxwell'
  },
  {
    text: 'For what is liberty but the unhampered translation of will into act?',
    author: 'Dante Alighieri'
  },
  {
    text: 'The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis.',
    author: 'Dante Alighieri'
  },
  {
    text: 'The secret of getting things done is to act!',
    author: 'Dante Alighieri'
  },
  {
    text: 'He listens well who takes notes.',
    author: 'Dante Alighieri'
  },
  {
    text: 'Just do what must be done. This may not be happiness, but it is greatness.',
    author: 'George Bernhard Shaw'
  },
  {
    text: 'A gentleman is one who puts more into the world than he takes out.',
    author: 'George Bernhard Shaw'
  },
  {
    text: 'I learned long ago, never to wrestle with a pig. You get dirty, and besides, the pig likes it.',
    author: 'George Bernhard Shaw'
  },
  {
    text: 'A life spent making mistakes is not only more honourable, but more useful than a life spent doing nothing.',
    author: 'George Bernhard Shaw'
  },
  {
    text: 'The only way to avoid being miserable is not to have enough leisure to wonder whether you are happy or not.',
    author: 'George Bernhard Shaw'
  },
  {
    text: " If you have an apple and I have an apple and we exchange these apples, then you and I still each have one apple. But if you have an idea and I have an idea and we exchange these ideas, then each of us will have two ideas.",
    author: ' George Bernhard Shaw'
  },
  {
    text: "I’m a great believer in luck, and I find the harder I work, the more I have of it.",
    author: 'Thomas Jefferson'
  },
  {
    text: "Man does not simply exist but always decides what his existence will be, what he will become in the next moment.",
    author: 'Viktor Frankl'
  },
  {
    text: "When people do their best, like I always try, and you lose you don't have to hide.",
    author: 'Jose Mourinho'
  },
  {
    text: "If we can really understand the problem, the answer will come out of it, because the answer is not separated from the problem.",
    author: 'Jiddu Krishnamurti'
  },
  {
    text: "We all want to be famous people, and the moment we want to be something we are no longer free.",
    author: ' Jiddu Krishnamurti'
  },
  {
    text: "A man who is not afraid is not aggressive, a man who has no sense of fear of any kind is really a free, peaceful man.",
    author: 'Jiddu Krishnamurti'
  },
  {
    text: "Waste is any human activity which absorbs resources but creates no value.",
    author: 'J.P. Womak'
  },
]