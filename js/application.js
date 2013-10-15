$(document).ready(function() {

		
	var current_question = 0;
	var current_score = 0;
	
	function quizCore(q, c, ans1, ans2, ans3, ans4, ans5) {
	 this.question = q;
	  this.answer = [ans1, ans2, ans3, ans4, ans5];
	  this.correct = parseInt(c);	  
	}
	
	function nextQuestion()
	{
		//current  question
		$('#result').html("Question "+(current_question+1));
		$('#question').html(question[current_question].question);
		
		//for loop for choices
		for (var i=0;i<question[0].answer.length;i++)
		{
			$("label[for=a"+i+"]").html(question[current_question].answer[i]);
		}
	}
	
	function keepScore(entered_value)
	{
		//alert("entered value is "+entered_value);
		//alert("correct answer is "+parseInt(question[current_question].correct));
		if (current_question < question.length)
		{
			if (entered_value == parseInt(question[current_question].correct))
			{
				current_score = current_score + 10;
			}
		}
	}

	var question = [];
	question[0] = new quizCore("What are some advantages of using jQuery?", 5, "It simplifies Javascript-based applications", "It addresses browser compatibility issues", "It makes it easier to introduce dynamic ui behaviour", "It improves the readability of Javascript applications", "All of the above");
	
	question[1] = new quizCore("What are some disadvantages of using jQuery?", 4, "It is a new skill to be learned", "It introduces a bit of overhead to Javascript", "Advanced troubleshooting may require a deeper understanding of the api implementation", "All of the above", "None of the above");	
			
	
	nextQuestion(); 	
	
	$("#ok").click(function (event) {
		event.preventDefault();	
				
		var value = $("input:radio[name=group1]:checked").val();
		keepScore(value);	
		current_question++;
			
		//alert(value);		
		if (current_question < question.length)
		{				
			//alert(current_score);						
			nextQuestion();			
		}	
		else
		{
			$('#result').html("Congratulations, your score is "+current_score+" / 20");
			$('#quizitems').hide();
			//alert("Congratulations, your score is "+current_score+" / 20");
		}
		
	});	
	                                                  
});