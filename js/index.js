var id = ['1','2','3','4','5'];
var names = ['Rıdvan','Tamer','Mehmet','Muhammet','Emin'];
var text = ['Nasılsın?','Len?','Kanka','Tamamdır','Görüşürüz.'];
var images = ['http://i.hizliresim.com/Gz6PXZ.gif','http://i.hizliresim.com/Gz6PXZ.gif','http://i.hizliresim.com/Gz6PXZ.gif','http://i.hizliresim.com/Gz6PXZ.gif','http://i.hizliresim.com/Gz6PXZ.gif'];
var statu = ['Müsait','Meşgul','Sinemada','İşte','Sporda'];
var times = ['12:10','15:33','19:18','09:11','05:30'];
$('#chats').css('border-bottom','2px solid #fff');
$('.option').hide();
$('.search').hide();
$('.mainbody').click(function() {
  $('.option').fadeOut(400);
  $('.search').fadeOut(400);
});
$('.fa-ellipsis-v').click(function() {
  $('.option').fadeIn(400);
});

$(function() {
	$('.sohbetAc').click(function() {
	  var id = $(this).data("id");
	  var avatar = $(this).data("avatar");
	  var name = $(this).data("name");
	  var status = $(this).data("status");
	  var times = $(this).data("times");
		
		$('.chat').css('display', 'none', '-webkit-animation', 'conditionalClose 1s normal forwards ease-in-out', 'animation', 'conditionalClose 1s normal forwards ease-in-out', '-webkit-transform-origin', '100% 0%', 'transform-origin', '100% 0%');
		$('.messages').slideToggle(200,function() {
		$('.chat').css('display', 'none', '-webkit-animation', 'conditionalClose 1s normal forwards ease-in-out', 'animation', 'conditionalClose 1s normal forwards ease-in-out', '-webkit-transform-origin', '100% 0%', 'transform-origin', '100% 0%');
		$(".uavatar").attr("src", avatar);
		$(".uname").text(name);
		$(".ustatus").html("son görülme bugün " + status);
	  
	  
	  });
	});
	$('.sohbetKapat').click(function() {
		$('.messages').css('display','none');
		$('.chat').css('display','block');
	});
});
$('.fa-search').click(function() {
  $('.search').toggle(400);
});
$('.fa-users').click(function() {
  $('#contacts').css('border-bottom','2px solid #fff');
  $('#chats').css('border-bottom','2px solid transparent');
  $('#calls').css('border-bottom','2px solid transparent');
  $('.mainbody').html('');
  for(var i=0; i<5; i++) {
	$('.mainbody').append('<a class="sohbetAc sohbet-'+id[i]+'" data-id="'+id[i]+'" data-avatar="'+images[i]+'" data-name="'+names[i]+'" data-status="'+times[i]+'"><div class="people"><img class="peoplea" src="'+images[i]+'"><p class="peoplen">'+names[i] +'</p><p class="dates">'+times[i]+'</p><p class="peoplestatus" style="display:none;">'+statu[i]+'</p><svg xmlns="http://www.w3.org/2000/svg" class="gorulduIkon" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg><p class="peoplem">'+text[i] +'</p></div></a>'
  )}
});
$('#chats').click(function(evt) {
  $('#chats').css('border-bottom','2px solid #fff');
  $('#calls').css('border-bottom','2px solid transparent');
  $('#contacts').css('border-bottom','2px solid transparent');
  $('.mainbody').html('');
  for(var i=0; i<5; i++) {
	$('.mainbody').append('<a class="sohbetAc sohbet-'+id[i]+'" data-id="'+id[i]+'" data-avatar="'+images[i]+'" data-name="'+names[i]+'" data-status="'+times[i]+'"><div class="people"><img class="peoplea" src="'+images[i]+'"><p class="peoplen">'+names[i] +'</p><p class="dates">'+times[i]+'</p><p class="peoplestatus" style="display:none;">'+statu[i]+'</p><svg xmlns="http://www.w3.org/2000/svg" class="gorulduIkon" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg><p class="peoplem">'+text[i] +'</p></div></a>'
  )
}
});
$('#calls').click(function() {
  $('#calls').css('border-bottom','2px solid #fff');
  $('#chats').css('border-bottom','2px solid transparent');
  $('#contacts').css('border-bottom','2px solid transparent');
  $('.mainbody').html('<p class="callspara">WhatsApp kullanan kişileri aramak için ekranın üstündeki <i class="zmdi zmdi-phone-forwarded"></i> simgesine dokunun.</p>');
});
$('#contacts').click(function() {
  $('#contacts').css('border-bottom','2px solid #fff');
  $('#chats').css('border-bottom','2px solid transparent');
  $('#calls').css('border-bottom','2px solid transparent');
  $('.mainbody').html('');
  for(var i=0; i<5; i++) {
	$('.mainbody').append('<a class="sohbetAc sohbet-'+id[i]+'" data-id="'+id[i]+'" data-avatar="'+images[i]+'" data-name="'+names[i]+'"" data-status="'+statu[i]+'"><div class="people"><img class="peoplea" src="'+images[i]+'"><p class="peoplen">'+names[i] +'</p><p class="peoplestatus">'+statu[i]+'</p></div>'
  )}
});

for(var i=0; i<5; i++) {
  $('.mainbody').append('<a class="sohbetAc sohbet-'+id[i]+'" data-id="'+id[i]+'" data-avatar="'+images[i]+'" data-name="'+names[i]+'" data-status="'+times[i]+'"><div class="people"><img class="peoplea" src="'+images[i]+'"><p class="peoplen">'+names[i]+'</p><p class="dates">'+times[i]+'</p><p class="peoplestatus" style="display:none;">'+statu[i]+'</p><svg xmlns="http://www.w3.org/2000/svg" class="gorulduIkon" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg><p class="peoplem">'+text[i]+'</p></div></a>'
  )
}

var ilkmesaj = ['Projeye devam mı?','Nasıl gidiyor?','Proje yapalım mı?','Napıyorsun?',	'Dün nerdeydin yahu?',];
var random = document.querySelector('#random');
random.innerHTML = ilkmesaj[Math.floor(Math.random() * ilkmesaj.length)];

var deviceTime = document.querySelector('.status-bar .time');
var messageTime = document.querySelectorAll('.message .time');
deviceTime.innerHTML = moment().format("HH:mm");
setInterval(function() {
	deviceTime.innerHTML = moment().format("HH:mm");
}, 1000);
for (var i = 0; i < messageTime.length; i++) {
	messageTime[i].innerHTML = moment().format("HH:mm");
}

var form = document.querySelector('.conversation-compose');
var conversation = document.querySelector('.conversation-container');
form.addEventListener('submit', newMessage);
function newMessage(e) {
	var input = e.target.input;
	if (input.value) {
		var message = buildMessage(input.value);
		conversation.appendChild(message);
		animateMessage(message);
	}
	input.value = '';
	conversation.scrollTop = conversation.scrollHeight;
	e.preventDefault();
}
function buildMessage(text) {
	var element = document.createElement('div');
	element.classList.add('message', 'sent');
	element.innerHTML = text +
		'<span class="metadata">' +
			'<span class="time">' + moment().format("HH:mm")+ '</span>' +
			'<span class="tick tick-animation">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck" x="2047" y="2061"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#92a58c"/></svg>' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" id="msg-dblcheck-ack" x="2063" y="2076"><path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.88a.32.32 0 0 1-.484.032l-.358-.325a.32.32 0 0 0-.484.032l-.378.48a.418.418 0 0 0 .036.54l1.32 1.267a.32.32 0 0 0 .484-.034l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.88a.32.32 0 0 1-.484.032L1.892 7.77a.366.366 0 0 0-.516.005l-.423.433a.364.364 0 0 0 .006.514l3.255 3.185a.32.32 0 0 0 .484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="#4fc3f7"/></svg>' +
			'</span>' +
		'</span>';

	return element;
}
function animateMessage(message) {
	setTimeout(function() {
		var tick = message.querySelector('.tick');
		tick.classList.remove('tick-animation');
	}, 500);
}