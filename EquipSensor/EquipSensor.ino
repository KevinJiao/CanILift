//Arduino module for detecting whether a piece of equipment is in use or not

const int signalpin = 3;
const int inputpin = 5;

void setup(){
    pinMode(signalpin, OUTPUT);
    pinMode(inputpin, INPUT);
    Serial.begin(9600);
}

void loop(){
    int duration = polldistance();
    Serial.println(duration);
    delay(1000);



}

int polldistance(){
    digitalWrite(signalpin, LOW); //pulses output HIGH for 5 microseconds
    delayMicroseconds(2);
    digitalWrite(signalpin, HIGH);
    delayMicroseconds(5);
    digitalWrite(signalpin, LOW);

    int duration = pulseIn(inputpin, HIGH);
    return duration;
}
