class Question {
    constructor() {
        this.input1 = createInput("Name");
        this.input2 = createInput("Correct option");
        this.title = createElement('h2');
        this.question = createElement('h2');
        this.option1 = createElement('h2');
        this.option2 = createElement('h2');
        this.option3 = createElement('h2');
        this.option4 = createElement('h2');
        this.button = createButton('Submit');
    }

    hide() {
        this.input1.hide();
        this.button.hide();
        this.input2.hide();
        this.title.hide();
    }

    display() {
        this.title.html("My Quiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- I start with M and end with X, and I have a never ending amount of letters. What am I?");
        this.question.position(70, 80);
        this.option1.html("1: Mix");
        this.option1.position(150, 125);
        this.option2.html("2: Mailbox");
        this.option2.position(150, 155);
        this.option3.html("3: Multiplex");
        this.option3.position(150, 185);
        this.option4.html("4: Matrix");
        this.option4.position(150, 215);

        this.input1.position(250, 330);
        this.input2.position(400, 330);
        this.button.position(325, 380);

        this.button.mousePressed(() => {
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}