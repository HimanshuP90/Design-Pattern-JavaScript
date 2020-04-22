function MessageBroker() {
  this.channelSub = {};
  this.subscribe = (channelName, subscriber) => {
    this.channelSub[channelName].push(subscriber);
  };
  this.publish = (channelName, message) => {
    this.channelSub[channelName].forEach(el => {
      el.onMessage(message);
    });
  };
}

function Subscriber() {
  this.onMessage = message => {
    console.log(message);
  };
}

const sub1 = new Subscriber();
const sub2 = new Subscriber();
const sub3 = new Subscriber();

const msgBroker = new MessageBroker();

msgBroker.subscribe("Channel_1 -", sub1);
msgBroker.subscribe("Channel_1 -", sub2);
msgBroker.subscribe("Channel_2 -", sub3);
msgBroker.subscribe("Channel_2 -", sub4);

msgBroker.publish("Channel_1", { data: 10 });
msgBroker.publish("Channel_1", { data: 20 });
msgBroker.publish("Channel_2", { data: 30 });
msgBroker.publish("Channel_2", { data: 40 });
