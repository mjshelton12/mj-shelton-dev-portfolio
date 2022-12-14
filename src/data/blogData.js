export const blogData = [
  {
    id: 1,
    img: "https://i.ytimg.com/vi/5vHXcuceYcU/maxresdefault.jpg",
    alt: "MJ On Set",
    title: "How is TV Post Production Like an Agile Project?",
    description:
      "COMING SOON! - A TV show is just a giant project. Don't believe me? Read this post to find out!",
    blog: "Coming Soon!",
  },
  {
    id: 2,
    img: "https://www.computerhope.com/jargon/r/regular-expression.gif",
    alt: "Regex",
    title: "How to Create an Email Regex",
    description:
      "A how-to that breaks down and explains how to create an email regex with a sense of humor",
    blog: "<a href='https://gist.github.com/mjshelton12/89b6d2bd8b0d1b5c0e1e2e6908da070e' target='blank' className='content-center'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Click Here to Read Original Gist on GitHub</button></a><br></br><h3>A Look @ the Fun of Regexes</h2><p>Code can be dense and databases even denser. For that reason, it is vital for coders to find quick and easy ways to navigate their code. Whether it includes searching through user submitted data or parsing through seeded information, computers are experts at hide and seek. To make their hunting skills more powerful, Regular Expressions (commonly known as regexes) allow programmers to sift through massive amounts of data or code to quickly find what they are looking for. Being able to search for email addresses is a notably helpful challenge; A programmer might use it to confirm that a user provided a valid email address when signing up for a website or might use this power to search for and redact important information from sites that don't want it circulating anywhere someone has a wifi connection.</p><p>Well, have I excited you enough about the power of email regexes? Excellent! Let’s learn how to create one...</p><h3>Summary</h3><p>In this tutorial, I will explore the elements that go into making a regex designed to search for or confirm email addresses in JavaScript. I will cover such thrilling topics as anchors, qualifiers, grouping constructs, and more!</p><p>If you already have some knowledge of regexes or have specific needs in mind, the table of contents below will allow you to bounce around this tutorial for specific content. Also, leave a comment to let me know if there's anything you think should be added and subscribe to see if I took your or anyone else's advice.</p><p>Happy expressing!</p><h3>Table of Contents</h3><p>Literals</p><p>Anchors</p><p>Bracket Expressions</p><p>Character Classes</p><p>Grouping Constructs</p><p>Character Escapes</p><p>Quantifiers</p><p>Conclusion</p><h3>Regex Components</h3><p>Here is an example of an email regex:</p><div><p>/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/</p></div><p>Each character in this line is referred to as a token. Every token specifies something about our regex. If it looks baffling now, don't worry. We're going to break it down step-by-step until we understand each and every token.</p><p>Note that in JavaScript, your regex must be surrounded by forward slashes (/):</p><div><p>/^([a-z0-9_\.-]+)@([\da-z\.-]+).([a-z\.]{2,6})$/</p></div><p>This is because a regex is considered a literal. Some other programs do not need these slashes. The expression itself is made up of the characters within them.</p>"
  },
  {
    id: 3,
    img: "https://camo.githubusercontent.com/8274f836ace6e19818d62b94f443ca80b81c2eb643ad5c5d77b8f405e51f8478/68747470733a2f2f692e696d6775722e636f6d2f636f33756349492e6a706567",
    alt: "Database Image",
    title: "MySQL vs MongoDB",
    description:
      "COMING SOON - A fight to the death between databases",
    blog: "<p>Coming Soon!</p><p>Let's get ready to rumble!</p>",
  },
];


/*
So, what is happening between those slashes? That we will discover as we walk through the different components that make up this regex.
    
    Literals
    A literal is a token which your regex searches for literally. For example, if I put the letter "a" in our regular expression, it will search for "a" literally. It won't return "A" it won't return any other letter. Just "a" and no more.
    
    This is as opposed to meta character which represent other characters; our expression won't literally look for the character we put, but rather the characters that character represents. We'll be going into various meta characters in future sections.
    
    But for now, let's find what literals our regex is hunting for:
    
    /^([a-z0-9_\.-]+) @ ([\da-z\.-]+)\.([a-z\.]{2,6})$ /
    
    Our expression has one literal: @. This is because every email is in the format of example @ email.com. Every other character could be almost anything, and the . that comes before .com or .net. or .org, etc. will need a Character Escape to be searched for.
    
    But we're getting ahead of ourselves.
    
    Let's take our @ and then learn about another part of our regex in order to slowly break down the whole thing.
    
    Anchors
    An anchor is a token that signifies something about the tokens before or after them, or about how to find a match. They don't represent a letter, number, space, or other element of whatever we are searching for, but rather it tells us something about the tokens close to it or the matching process.
    
    The tokens used in our email regex are the ^ and the $. Find them here:
    
    / ^ ([a-z0-9_\.-]+)@([\da-z\.-]+).([a-z\.]{2,6}) $ /
    
    The ^ conveys that a string begins with whatever token or tokens follow it. This allows you to specify that whatever string you are looking for, it either will have some kind of white space (such as a tab or space) before it, or it will be the beginning of the code (such as the beginning of a paragraph that doesn't have a space before it).
    
    The $ conveys basically the opposite of our ^. It says that the string ends with the tokens that precede it. Note that what this actually suggests is that it ends with [a-z.] and NOT {2,6}. To learn why, jump to the Quantifiers section.
    
    So now we know which tokens will be the start and end of our regex, let's learn how to indicate what specifically those tokens will be.
    
    Bracket Expressions
    In a regular expression, anything that falls in brackets will represent a range of tokens for our expression to match. For example, if I write [a-f], my regex will look for tokens "a", "b", "c", "d", "e", and "f". Tokens that fall within brackets are known as bracket expressions. You can also write out each letter within the bracket (such as [abcdef]), but making use of the hyphen makes covering a lot of tokens that much faster. As someone who just had to write out "a" through "f" with quotation marks and commas, I can promise you that bracket expressions with hyphens are handy time savers!
    
    The bracket expression doesn't hunt for just those letters, however, rather a string that contains at least one of those letters. This means the expression I wrote might bring "banana", "foot", "cloudy", or "aaaa".
    
    Let's find the bracket expressions in our regex:
    
    /^( [a-z0-9_\.-] +)@( [\da-z\.-] +).( [a-z\.] {2,6})$/
    
    Wow, look at all those bracket expressions! They are working hard to help us in our search. Let’s break down these kinds of expressions so we can figure out what's happening.
    
    When you see [a-z] or [A-Z] in a bracket expression, it suggests that the string we are hunting for can contain any letter from a to z. If the letters in the bracket are lowercase, then the expression will only look for lowercase letters. If it is uppercase, then it will only look for uppercase letters. We can also combine these expressions to get [a-zA-Z], which hunts for both uppercase and lowercase letters. Our expression has [a-z], so that tells us this regex is searching for a string that contains any lowercase letter. It will not find uppercase. As email addresses can have uppercase, we'll have to either add [A-Z] or make a function to make all the letters lowercase in order to make this regex work.
    
    If a regex contains [0-9], it signifies that the string we are looking for can contain any number 0 through 9. Our expression does, so it's hunting for a string that has any number.
    
    For special characters, some have a unique meaning in a regex, but that doesn't mean you can't search for them. We'll talk about what they mean in future sections, but for now know that if you want the expression to instead look for an actual special character in your code, you must use a Character Escape which will be discussed down below.
    
    Let’s see how this is being used in our expression. There are three bracket expressions, we'll go through each one.
    
    [a-z0-9_\.-]
    
    Here we are asking this expression to search all lowercase letters, all integers, the special character _, the special character . (with a backward slash Character Escape), and the special character -.
    
    Next, we have:
    
    [\da-z\.-]
    
    The \d is a Character Class which we will be learning about in the next section, so scroll down to learn what it's doing. After that, we are asking our expression to search all lowercase letters, then the special character . (again, with its Character Escape), and a -.
    
    Finally, we have:
    
    [a-z\.]
    
    This last bracket expression is only searching for all lowercase letters and the literal . (once again with its Character Escape).
    
    Bracket expressions are incredibly useful, but sometimes there is an even faster way to write what we want to search for.
    
    Character Classes
    Character classes make quick work of telling an expression to search for any of a certain type of character. Instead of writing out each character or defining a range, as long as we want every character in a set, we can easily ask our expression to hunt for them.
    
    For example, if you want to find any alphanumeric character (including an underscore), you can simply write \w. This will return strings with upper and lowercase letters, any single number, or an underscore. You could also write it as a Bracket Expression as such [A-Za-z0-9_].
    
    Another useful class include \d which matches any single number like the bracket expression [0-9]. The . matches any character with the exception of the new line. /s matches a single whitespace character and includes line breaks and tabs.
    
    Let’s find the character classes in our expression:
    
    /^([a-z0-9_\.-]+)@([ \d a-z\.-]+).([a-z\.]{2,6})$/
    
    Look at that, we have a \d character class. That's letting our expression know that we want it to search for all numeric symbols 0-9.
    
    By now in this tutorial, we've seen special characters be used to indicate things like ranges, bracket expressions, and character classes. But what if we actually want to search for a special character? For that we need...
    
    Character Escapes
    Remember when we learned about Literals? I had promised you we'd also talk about meta characters, and we've mentioned a few, such as the . in Character Classes. The question I'm sure you've been burning to ask is if a character such as . represents other characters, how are we supposed to search for a literal . in our code?
    
    Easy! With character escapes!
    
    A character escape is a simple backslash () which tells our code that whatever token follows it should be searched for literally. For an example, let’s look at our regex once more:
    
    /^([a-z0-9_\ . -]+)@([\da-z\ . -]+) . ([a-z\ . ]{2,6})$/
    
    We can see that each bracket expression includes \. which means our regex will know it is meant to hunt for the . character literally. In our regex, it is both included within Bracket Expressions and on its own. The one on its own is what tells our regex to always make sure there is a . which represents the period before a .com, .net. .org, etc.
    
    Cool right? But I bet you are thinking, if this is how to search for these characters literally, can you tell me more about what other special characters mean when not used with a character escape? Of course I can! You can learn some of them in the next section...
    
    Quantifiers
    If you've been following along with this whole tutorial, you now know what every literal or meta character in our regex is searching for. Thrilling! However, telling our expression what we are looking for doesn't cover the full scope of the search. After all, email addresses can be long or short, as can the name of the website or organization they are attached to. How do we let our expression know this?
    
    Quantifiers help us set limits to our search, commonly telling our expression things like what the minimum or maximum length of the strings we are looking for would be. Quantifiers are what's known as greedy. This means they match as many occurrences of the pattern as possible.
    
    A few examples of quantifiers are * which matches the pattern 0 or more times. A + matches the pattern one or more times. The ? matches the pattern 0 or 1 time.
    
    And then there are these babies {}. They allow for up to three different ways to match. {x} matches the pattern exactly x number of times. {x,} matches the pattern at least x number of times. And {x, y} matches the pattern from a minimum of x numbers of time and a maximum of y number of times.
    
    Still following?
    
    Let's look at our email regex for an example.
    
    /^([a-z0-9_\.-] + )@([\da-z\.-] + ).([a-z\.] {2,6} )$/
    
    Both our first Bracket Expressions are succeeded by a + which means we are telling our expression that the code we want it to find will match the symbols we included one or more times. So, whether an email is one character or a hundred long, our expression will capture it!
    
    Our last one has {2,6}. This suggests the end of our email addresses will have a minimum length of 2 and a maximum of 6.
    
    So now we know what symbols to hunt for and how long they will be. But I bet you are thinking, "Wow, I had no idea searching for a simple email address would be so complicated! I mean, emails have different rules for different parts! How does our regex know that?!?!"
    
    Don't worry, we'll answer that question with...
    
    Grouping Constructs
    You can think of an email in three parts. The unique address, the website it's attached to, and the top-level domain (think .org or .com). Each of these parts have different scopes, as broken down here:
    
    /^([a-z0-9_.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    can break down to:
    
    /^
    
    Unique address: ([a-z0-9_.-]+)
    
    @
    
    Website: ([\da-z\.-]+)
    
    \.
    
    Top-level domain: ([a-z\.]{2,6})
    
    $/
    Notice something? Each of the three parts I highlighted have parentheses around them. Look at it all together once more:
    
    /^ ( [a-z0-9_\.-]+ ) @ ( [\da-z\.-]+ ) . ( [a-z\.]{2,6} ) $/
    
    Boom, mind blown.
    
    These parentheses are grouping constructs which, as the name suggests, groups elements of our regex together to create what's known as a subexpression.
    
    Subexpressions each have their own literals, meta characters, quantifiers, and so on that they are searching for. This allows us to tell our expression to search for different criterial for different parts of the whole expression.
    
    You can also use these groups to capture certain parts of a search, but as we're just going over how to build the regex, I'll let you google that one yourself.
    
    Alright, you did it. If you read every part of this tutorial, you now understand every element of our email regex. Want a quick run through of it all again now that's you are that much smarter? I can do that for ya, just keep on scrolling to the...
    
    Conclusion
    Wow, that was a marathon of a tutorial, wasn't it? Struggling to remember all that we learned? Let's break it down one last time to see what we've learned.
    
    Here is our regex:
    
    /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    Let's walk through it character by character:
    
    We are telling our expression to search in JavaScript ( the / at the front) for the beginning of a string (^ , an Anchor) that starts with a group ( ( , a Grouping Construct) including the bracket ([ , a Bracket Expression) that is looking for all lowercase letters a through z (a-z), all numbers 0-9 (0-9), the special character _ (_), the special character . (., which includes a Character Escape), and the special character - (-). Then we close our bracket expression (]) and tell our expression that the string we are hunting for will match any of those characters one or more times (+ , a Quantifier). We close that group( ) ) and then look for @ literally (@, a Literal). Then we start a new group ( ( ) that contains a bracket expression ([) that is looking for all numbers 0-9 (/d, a Character Class), all letters a-z (a-z), and the special characters . and - (.-). Then we close our bracket expression (]) and tell our regex that the string we are hunting for will match any of those characters one or more times (+). Then we close that group ( ) ) and look for a . (.). We now open a third group ( ( ) and a third bracket expression ([) which searches for the letters a-z (a-z) and the special character . (.). We close our bracket (]) and add a minimum length of 2 and maximum length of 6 to that group ({2,6}) before closing that group ( ) ). We finish our expression by letting our regex know the string we are hunting for will end here ($) and finally close the expression in JavaScript (/).
    
    Congratulations, we have now broken down every single part of this expression. You now have the power to search for emails; please use it for good.
    
    Special Thanks To...
    I couldn't have written this tutorial without a little help from the following:
    
    https://www.youtube.com/watch?v=7DG3kCDx53c
    https://www.rexegg.com/regex-anchors.html
    https://coding-boot-camp.github.io/full-stack/computer-science/regex-tutorial
    https://www.threesl.com/blog/special-characters-regular-expressions-escape/
    Author
    MJ is a verbose programmer excited to code and talk about code. Find her work here:
    
    MJ's GitHub",""
*/