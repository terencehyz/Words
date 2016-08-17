angular.module('starter.services', [])

.factory('localWords',function () {
  var words = [
    {
      w:"abandon",
      t:"丢弃；放弃，抛弃",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"ability",
      t:"能力；能耐，本领",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"aboard",
      t:"在船(车)上；上船",
      n:"ad.",
      ww:"",
      letter:""
    },{
      w:"absence",
      t:"缺席，不在场；缺乏",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"absolute",
      t:"绝对的；纯粹的",
      n:"a.",
      ww:"",
      letter:""
    },{
      w:"absorb",
      t:"吸收；使专心",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"abundant",
      t:"丰富的；大量的",
      n:"a.",
      ww:"",
      letter:""
    },{
      w:"abuse",
      t:"滥用；虐待",
      n:"vt. n.",
      ww:"",
      letter:""
    },{
      w:"academic",
      t:"学院的；学术的",
      n:"a.",
      ww:"",
      letter:""
    },{
      w:"academy",
      t:"私立中学；专科院校",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"accompany",
      t:"陪伴，陪同；伴随;",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"adequate",
      t:"足够的；可以胜任的;",
      n:"a.",
      ww:"",
      letter:""
    },{
      w:"administration",
      t:"管理；管理部门;",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"accompany",
      t:"陪伴，陪同；伴随;",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"accomplish",
      t:"达到(目的)；完成;",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"accelerate",
      t:"(使)加快；促进;",
      n:"vt.",
      ww:"",
      letter:""
    },{
      w:"affection",
      t:"慈爱，爱；爱慕;",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"agent",
      t:"代理人，代理商;",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"agony",
      t:"极度痛苦;",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"altitude",
      t:"高，高度；高处",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"anger",
      t:"怒，愤怒;使发怒;",
      n:"n. v.",
      ww:"",
      letter:""
    },
    {
      w:"anxious",
      t:"忧虑的；渴望的",
      n:"a.",
      ww:"",
      letter:""
    },
    {
      w:"apparent",
      t:"表面上的；明显的;",
      n:"a.",
      ww:"",
      letter:""
    },
    {
      w:"apply",
      t:"应用，实施，使用;",
      n:"vt.",
      ww:"",
      letter:""
    },
    {
      w:"appropriate",
      t:"适当的，恰当的",
      n:"a.",
      ww:"",
      letter:""
    },
    {
      w:"arrow",
      t:"箭；箭状物;",
      n:"n.",
      ww:"",
      letter:""
    },
    {
      w:"assembly",
      t:"集合；集会；装配;",
      n:"n.",
      ww:"",
      letter:""
    },
    {
      w:"assume",
      t:"假定；承担；呈现;",
      n:"vt.",
      ww:"",
      letter:""
    },
    {
      w:"logical",
      t:"逻辑的；符合逻辑的;",
      n:"a.",
      ww:"",
      letter:""
    },
    {
      w:"bother",
      t:"烦扰，迷惑;n.麻烦;",
      n:"vt.",
      ww:"",
      letter:""
    }, {
      w:"clerk",
      t:"店员；办事员，职员;",
      n:"n.",
      ww:"",
      letter:""
    },{
      w:"entire",
      t:"全部的，整个的",
      n:"a.",
      ww:"",
      letter:""
    }


  ];
  return {
    all:function () {
      return words;
    },
    getword:function () {
      var num=Math.floor(Math.random()*words.length);
      //console.log(words.length)
      var num2=Math.floor(Math.random()*words[num].w.length);
      //console.log(num2);
      words[num].ww=words[num].w;

      if(num2==0){
        words[num].ww='_'+words[num].w.substring(1,words[num].w.length);
      }
      else{
        if(num2==words[num].w.length){
          words[num].ww=words[num].w.substring(1,words[num].w.length-1)+'_';
        }
        else{
          words[num].ww=words[num].w.substring(0,num2)+'_'+words[num].w.substring(num2+1,words[num].w.length);
        }
      }

      words[num].letter=words[num].w.charAt(num2);
      return words[num];
    }
  };
})


.factory('rawWords',function () {
  return{
    allRaw:function () {
      var rawString=window.localStorage['raws'];
      if(rawString){
        var raws=angular.fromJson(rawString);
        return raws;
      }
      return [];
    },

    save:function (raws) {
      window.localStorage['raws']=angular.toJson(raws);
    }
  };
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
