function startIntro(){

  var intro = introJs().setOptions({ 'hidePrev': true, 'hideNext': true, 'exitOnOverlayClick': false, 'showStepNumbers':false, 'showBullets':false, 'scrollToElement':true, 'doneLabel':'Done &#10003' });

  intro.setOptions({
    steps: [
      {
        element: document.querySelectorAll('#step0')[0],
        intro: "Here are some tips on how to identify a phishing scam on social media. Look for these clues!",
        position: "right",
        scrollTo: 'tooltip'
      },
      {
        element: document.querySelectorAll('#shortenedURL')[0],
        intro: "Look out for shortened URLs in posts or private messages. This is a strategy scammers use to make people go into a risky website. Even if a URL is not shortened, check carefully to make sure it is correct.",
        position: "right",
        scrollTo: 'tooltip'
      },
      {
        element: document.querySelectorAll('#step0')[0],
        intro: "If something sounds too good to be true, be skeptical! Scammers often offer easy chances to win free money or prizes.",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        element: document.querySelectorAll('#step5')[0],
        intro: "The message will sound urgent, making you worry that something is wrong. Or it will say that you have a limited time to respond. Be careful about messages that ask for financial information or information about your social media accounts.",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        element: document.querySelectorAll('#step5')[0],
        intro: "Look out for spelling and grammar errors, as well as images that don’t look quite right. A real company does not send out messages with these kinds of errors.",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        intro: "Scammers can also trick you by pretending to be your friend. If you get a message from a friend asking for private information or money, think twice before you respond."
      },
      {
        element: document.querySelectorAll('#step6')[0],
        intro: "What can you do if you see someone posting a phishing scam?",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        element: document.querySelectorAll('#shortenedURL3')[0],
        intro: "Ignore the link and don’t click on it, especially if it is a shortened or incorrect URL!",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        element: document.querySelectorAll('#flagStep')[0],
        intro: "You can press the “Flag” button to report the post to the website.",
        position: "right",
        scrollTo: "tooltip"
      },
      {
        element: document.querySelectorAll('#commentStep')[0],
        intro: "You can also write a comment on the post to warn other people that it might be a scam.",
        position: "top",
        scrollTo: "tooltip"
      }

    ]
  });

  intro.onbeforechange(function() {
      console.log($(this)[0]._currentStep);
      if($(this)[0]._currentStep == 1){
        intro.refresh();
        console.log('refreshed');
      }
      if($(this)[0]._currentStep === 5){
        $('.chat').transition("pulse");
      }
  });

  intro.start().onexit(function() {
    window.location.href='/tut_guide/phishing';
  });

}; //end startIntro

$(window).on("load", function() {
  startIntro();
});