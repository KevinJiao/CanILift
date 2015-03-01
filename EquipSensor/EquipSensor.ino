//Arduino module for detecting whether a piece of equipment is in use or not

const int signalpin = 3;
const int inputpin = 5;
const int threshold = 1000;

void setup(){
    pinMode(signalpin, OUTPUT);
    pinMode(inputpin, INPUT);
    Serial.begin(9600);
}

void loop(){
    boolean occupied = check_occupied(10);
    if(occupied){
      Serial.println("Equipment is in use");
    } else{
      Serial.println("Equipment is free");
    }
    delay(1000);



}

int poll_distance(){
    digitalWrite(signalpin, LOW); //pulses output HIGH for 5 microseconds
    delayMicroseconds(2);
    digitalWrite(signalpin, HIGH);
    delayMicroseconds(5);
    digitalWrite(signalpin, LOW);

    int duration = pulseIn(inputpin, HIGH);  
    delay(100);
    return duration;
}

boolean check_occupied(int num_samples){
  int counter =0; //counts number of times poll_distance returns occupied
  for (int i = 0; i < num_samples; i++){
    if (poll_distance()<threshold){
      counter++;
    }
  }
  return ((counter/num_samples) > 0.5);
}
