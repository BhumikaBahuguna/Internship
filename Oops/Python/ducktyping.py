# notify() does not care whether channel is an Email, SMS, or WhatsApp object.
# It only assumes that the object has a send() method.

class Email:
    def send(self):
        print("Sending Email")


class SMS:
    def send(self):
        print("Sending SMS")


class WhatsApp:
    def send(self):
        print("Sending WhatsApp message")

class Letter:
    def postLetter(self):
        print("Letter is posted")



def notify(channel):
    channel.send()


notify(Email())
notify(SMS())
notify(WhatsApp())
notify(Letter())