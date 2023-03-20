window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var running = false,
  user_id = 1,
  // server_api = 'http://127.0.0.1:8000/chatbot/',
  server_api = 'http://31.220.60.30:8000/chatbot/',
  message_box = document.getElementById('message-box');

var response_list = [];

function send() {
  if (running == true) return;
  if (msg == "") return;
  var msg = document.getElementById("message").value;
  running = true;
  addMsg(msg, true);
}

function startSr() {
  const recognition = new SpeechRecognition();
  var speech = true;
  var transcript;

  recognition.interimResults = false;

  recognition.addEventListener('result', e => {
    transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      .join('')
    addMsg(transcript, true);
  });

  if (speech == true) {
    recognition.start();
  }
}

function addMsg(_msg, _spell_check = true) {
  var msg = _msg.textContent;
  if (msg === undefined) {
    msg = _msg;
  }

  var div = document.createElement("div");
  div.innerHTML =
    "<span style='flex-grow:1'></span><div class='chat-message-sent'>" +
    msg +
    "</div>";
  div.className = "chat-message-div";
  document.getElementById("message-box").appendChild(div);

  document.getElementById("message").value = "";
  document.getElementById("message-box").scrollTop = document.getElementById("message-box").scrollHeight;

  //LOADER START
  var loader = document.createElement("div");
  loader.innerHTML = '<div title="getting response..."><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"><rect x="0" y="10" width="4" height="10" fill="grey" opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="8" y="10" width="4" height="10" fill="grey"  opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /></rect><rect x="16" y="10" width="4" height="10" fill="grey"  opacity="0.2"><animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /><animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /></rect></svg></div>';
  loader.className = "chat-message-received loader";
  document.getElementById("message-box").appendChild(loader);
  document.getElementById("message-box").scrollTop = document.getElementById("message-box").scrollHeight;
  //LOADER END

  prev_msg = document.getElementById('message-box').children[document.getElementById('message-box').children.length - 3].textContent;
  console.log('PREV MSG', prev_msg);
  //console.log(document.getElementById('message-box').children[document.getElementById('message-box').children.length - 3]);

  if (msg.toLowerCase() == "yes") {
    if (prev_msg == "Yes / No") {
      transferLiveChat();
    }
    else if (prev_msg == "Are you satisfied with the Chatbot's Response? Answer with 'Yes' or 'No'.") {
      removeLoader();
      var _data1 = { 'user_email': email, 'event_type': greeting_id, 'event_question': ques, 'event_answer': "Thank You for your co-operations with us.", 'session_value': '', 'intent': dept_custom };
      var _data2 = { 'user_email': email, 'event_type': greeting_id, 'event_question': ques, 'event_answer': "Please feel free to ask any other questions.", 'session_value': '', 'intent': dept_custom };
      setTimeout(addResponseMsg, 500, "Thank You for your co-operations with us.", true, _data1);
      setTimeout(addResponseMsg, 1000, "Please feel free to ask any other questions.", true, _data2);
    }
    else if (prev_msg.includes('Did you mean')) {
      removeLoader();
      _msg = document.getElementById('message-box').children[document.getElementById('message-box').children.length - 2].textContent.split("'")[1];
      console.log('MSG', _msg);
      addMsg(_msg, false);
    }
  }

  else if (msg.toLowerCase() == "no") {
    if (prev_msg == "Yes / No") {
      ask_another()
    }
    else if (prev_msg == "Are you satisfied with the Chatbot's Response? Answer with 'Yes' or 'No'.") {
      removeLoader();
      var length_ = document.getElementById('message-box').children;
      // send wrong answer to db
      // console.log(length_);
      // console.log(length_[length_.length - 4].textContent);
      var ques = length_[length_.length - 4].textContent;
      var ans = response_list[0];
      var intent = intents_list[0];
      // console.log(ques, ans);
      var _data1 = { 'user_email': email, 'event_type': livechat_id, 'event_question': ques, 'event_answer': "Do you want to talk with our Human Agent? please <strong>Click</strong> on either Yes or No", 'session_value': '', 'intent': dept_custom };
      setTimeout(addResponseMsg, 500, "Do you want to talk with our Human Agent? please <strong>Click</strong> on either Yes or No", true, _data1)
      setTimeout(addResponseMsg, 1000, "<p onclick='transferLiveChat()'>Yes</p> / <p onclick='ask_another()'>No</p>")
    }
  }

  else sendInputToServer(msg, prev_msg);
}

function addOnlyMsg(msg) {
  var _tmp = msg.split("'");
  console.log(_tmp);
  console.log(_tmp[1]);
  var div = document.createElement("div");
  div.innerHTML = "<span style='flex-grow:1'></span><div class='chat-message-sent'>" + _tmp[0] + "'<b style='text-decoration: underline;cursor: pointer;' onclick='addMsg(this,false)'>" + _tmp[1] + "</b>'</div>";
  div.className = "chat-message-div";
  document.getElementById("message-box").appendChild(div);

  document.getElementById("message").value = "";
  document.getElementById("message-box").scrollTop = document.getElementById("message-box").scrollHeight;
  running = false;
}

function sendInputToServer(input, prev_que) {
  var data = {'event_question': prev_que, "user_id": user_id, "event_answer": input},
    unknown = "I didn't quite get that. Please rephrase your query.",
    sorry = "Sorry, I am not able to detect the language you are asking.",
    api = server_api + "response/";

  console.log(data);

  fetch(api, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(res => {
    res.text().then(function (text) {
      if (res.status == 200) {
        removeLoader();
        let res = JSON.parse(text)
        console.log(res);

        // if (JSON.parse(text).intent != "spell") {
        //   for (var i = 0; i < response_list.length; i++) {
        //     if (response_list[i] != JSON.parse(text).answer) {
        //       response_list = [];
        //       intents_list = [];
        //       response_list.push(JSON.parse(text).answer);
        //       intents_list.push(JSON.parse(text).intent);
        //     }
        //   }
        // }

        // console.log(dept);
        // if (JSON.parse(text).intent != "Greetings") {
        //   response_list.push(JSON.parse(text).answer);
        //   intents_list.push(JSON.parse(text).intent);
        // }

        // console.log(JSON.parse(text).answer.toLowerCase());
        // console.log(sorry);
        // console.log(JSON.parse(text).answer.toLowerCase() == sorry);
        if (res.file === "created") {
          let url = "<a href='" + server_api + "display/" + user_id + "/" + "' target='_blank' style='text-decoration: underline; color: blue;'>Open your Graph</a>"
          var div = document.createElement("div");
          div.innerHTML = "<div class='chat-message-received more' id='minimize'>" + url + "</div>";
          div.className = "chat-message-div";
          document.getElementById("message-box").appendChild(div);
          document.getElementById("message-box").scrollTop = document.getElementById(
            "message-box"
          ).scrollHeight;
          running = false;
        }
        setTimeout(addResponseMsg,500,"Do you have any other Feature list")
        get_question()

        // if (JSON.parse(text).answer.toLowerCase() == sorry.toLowerCase()) {
        //   // var _data1 = { 'user_email': email, 'event_type': no_answer_id, 'event_question': input, 'event_answer': "Sorry, We could not recognize the question you've asked for. Kindly let us know if we help with anything else.", 'session_value': '', 'intent': dept_custom };
        //   // addResponseMsg("Sorry, We could not recognize the question you've asked for. Kindly let us know if we help with anything else.", true, _data1);
        //   // var _data2 = { 'user_email': email, 'event_type': livechat_id, 'event_question': input, 'event_answer': "In order to Transfer the same conversation to Live Agent Click from below.", 'session_value': '', 'intent': dept_custom };
        //   // addResponseMsg("In order to Transfer the same conversation to Live Agent Click from below.", true, _data2);
        //   // addResponseMsg("<p onclick='transferLiveChat()'>Yes</p> / <p onclick='ask_another()'>No</p>");
        //   //addResponseMsg("<a href='https://live-test-772cf.web.app/' target='_blank'>Yes</a> / <a href='#' onclick='ask_another()'>No</a>");
        //   //addResponseMsg("<a href='#' onclick='ask_another()'>No</a>");
        // }

        // else {
        //   // // console.log(JSON.parse(text).intent == dept);
        //   // // if (JSON.parse(text).intent == "Greetings")
        //   // // console.log(JSON.parse(text).intent.toLowerCase(), dept.toLowerCase());
        //   // // console.log(JSON.parse(text).intent.toLowerCase() == dept.toLowerCase());

        //   // // NEW CODE
        //   // if (JSON.parse(text).intent.toLowerCase() != '') {
        //   //   if (response_list[0] == JSON.parse(text).answer && response_list.length >= 2) {
        //   //     if (JSON.parse(text).intent.toLowerCase() == "general") {
        //   //       addResponseMsgWithUrl(JSON.parse(text).answer, JSON.parse(text).url, true, _data1, input);
        //   //     }
        //   //     else {
        //   //       var _data1 = { 'user_email': email, 'event_type': right_answer_id, 'event_question': input, 'event_answer': JSON.parse(text).answer, 'session_value': '', 'intent': JSON.parse(text).intent };
        //   //       addResponseMsg(JSON.parse(text).answer, false, _data1);
        //   //     }
        //   //     var _data1 = { 'user_email': email, 'event_type': greeting_id, 'event_question': input, 'event_answer': "Are you satisfied with the Chatbot's Response? Answer with 'Yes' or 'No'.", 'session_value': '', 'intent': dept_custom };
        //   //     setTimeout(addResponseMsg, 500, "Are you satisfied with the Chatbot's Response? Answer with 'Yes' or 'No'.", true, _data1);
        //   //   }

        //   //   else if (JSON.parse(text).intent.toLowerCase() == "general") {
        //   //     addResponseMsgWithUrl(JSON.parse(text).answer, JSON.parse(text).url, true, _data1, input);
        //   //   }

        //   //   else if (JSON.parse(text).intent.toLowerCase() == "spell") {
        //   //     var _data1 = {};
        //   //     addOnlyMsg("Did you mean '" + JSON.parse(text).answer + "'. Please type Yes or No.");
        //   //   }

        //   //   else if (JSON.parse(text).intent == "Live_Agent") {
        //   //     var _data1 = { 'user_email': email, 'event_type': livechat_id, 'event_question': input, 'event_answer': JSON.parse(text).answer, 'session_value': '', 'intent': JSON.parse(text).intent };
        //   //     addResponseMsg(JSON.parse(text).answer,);
        //   //     setTimeout(transferLiveChat, 3000)
        //   //   }

        //   //   else {
        //   //     var _data1 = { 'user_email': email, 'event_type': right_answer_id, 'event_question': input, 'event_answer': JSON.parse(text).answer, 'session_value': '', 'intent': JSON.parse(text).intent };
        //   //     addResponseMsg(JSON.parse(text).answer, false, _data1);
        //   //   }

        //   // }

        //   // else if (JSON.parse(text).intent == "Greetings") {
        //   //   var data = { 'user_email': email, 'event_type': greeting_id, 'event_question': input, 'event_answer': JSON.parse(text).answer, 'session_value': '', 'intent': JSON.parse(text).intent };
        //   //   console.log(data);
        //   //   addResponseMsg(JSON.parse(text).answer, true, data);
        //   // }

        //   // else {
        //   //   var _data1 = { 'user_email': email, 'event_type': greeting_id, 'event_question': input, 'event_answer': "Please ask questions according to the Department You selected.", 'session_value': '', 'intent': dept_custom };
        //   //   addResponseMsg("Please ask questions according to the Department You selected.", true, _data1);
        //   // }

        //   console.log(res)
        // }
      }

      else {
        removeLoader();
        var _data1 = { 'user_email': email, 'event_type': no_answer_id, 'event_question': input, 'event_answer': unknown, 'session_value': '', 'intent': dept_custom };
        addResponseMsg(unknown, true, _data1);
      }
    });
  });
}

function ask_another() {
  removeLoader();
  addResponseMsg("If you have any other questions, feel free to ask it.");
}

function removeLoader() {
  message_box.lastChild.remove();
}

function addResponseMsg(msg) {
  var div = document.createElement("div");
  div.innerHTML = "<div class='chat-message-received'>" + msg + "</div>";
  div.className = "chat-message-div";
  document.getElementById("message-box").appendChild(div);
  document.getElementById("message-box").scrollTop = document.getElementById(
    "message-box"
  ).scrollHeight;
  running = false;
}


document.getElementById("message").addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    send();
  }
});

function get_question() {
  // setTimeout(addResponseMsg,100,"Hi, This is AI Chatbot.")
  let data = {'user_id': user_id, "event_question": "first"};

  fetch(server_api + "request/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => {
    res.text().then(function (text) {
      response = JSON.parse(text);
      console.log(response);
        setTimeout(addResponseMsg,1000, response.question)
    })
  });
}


document.getElementById("chatbot_toggle").onclick = function () {
  if (document.getElementById("chatbot").classList.contains("collapsed")) {
    // console.log(document.getElementById("chatbot").children);
    document.getElementById("chatbot").classList.remove("collapsed")
    document.getElementById("chatbot_toggle").children[0].style.display = "none"
    document.getElementById("chatbot_toggle").children[1].style.display = ""
    // document.getElementById('refreshbtn').style.display = ""
    document.getElementById("chatbot").children[1].style.display = ""
    document.getElementById("chatbot").children[2].style.display = ""
    document.getElementById("chatbot").children[3].style.display = ""
    document.getElementById("chatbot").children[4].style.display = ""
    document.getElementById("message").focus()
    if (checkWelcomeMsg()) {
      get_question()
    }
  }

  else {
    var msgs = document.getElementById("message-box");
    while (msgs.lastChild) msgs.removeChild(msgs.lastChild);
    document.getElementById("chatbot").classList.add("collapsed")
    document.getElementById("chatbot_toggle").children[0].style.display = "inline-block"
    document.getElementById("chatbot_toggle").children[1].style.display = "none"
    document.getElementById("chatbot").children[1].style.display = "none"
    document.getElementById("chatbot").children[4].style.display = "none"
    document.getElementById("chatbot_toggle").style.backgroundColor = "white"
  }
}

function clear_chatbot() {
  var msgs = document.getElementById("message-box");
  db_commit = false;
  running = false;

  while (msgs.lastChild) {
    if (msgs.lastChild.textContent.includes("This is Zayed University AI Chatbot.")) break;
    else {
      db_commit = true;
      msgs.removeChild(msgs.lastChild);
    }
  }

  if (db_commit) {
    var data = { 'user_email': email, 'event_type': reset_id, 'event_question': '', 'intent': 'Reset' };
    fetch(server_api + "/login/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    }).then(res => {
      res.text().then(function (text) {
      })
    });
  }
}

function checkWelcomeMsg() {
  var list = document.getElementById("message-box").querySelectorAll('div');
  if (list.length == 0) return true;
  return false;
}

document.getElementById("chatbot_toggle").children[1].style.display = "none"
document.getElementById("chatbot").children[1].style.display = "none"
document.getElementById("chatbot").children[4].style.display = "none"
