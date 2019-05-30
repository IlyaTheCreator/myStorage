// A method is an object's property whose value is a function
let restraunt = {
  name: "ASB",
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize;
  }
};

// seatParty
// removeParty

restraunt.seatParty(72);
console.log(restraunt.checkAvailability(4));
restraunt.removeParty(5);
console.log(restraunt.checkAvailability(4));
