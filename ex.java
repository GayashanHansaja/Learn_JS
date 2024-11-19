













































class User {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void updateUserDetails(String newName, String newEmail) {
        this.name = newName;
        this.email = newEmail;
        System.out.println("User details updated.");
    }

    public void notifyUpdate() {
        System.out.println("Notification sent to " + this.email + " about the update.");
    }
}

class User {
    private String name;
    private String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void updateUserDetails(String newName, String newEmail) {
        this.name = newName;
        this.email = newEmail;
        System.out.println("User details updated.");
    }
}

class UserNotifier {
    public void notifyUpdate(User user) {
        System.out.println("Notification sent about the update.");
    }
}





















public class DiscountCalculator {
    public double calculate(String customerType, double amount) {
        if (customerType.equals("Regular")) {
            return amount * 0.9;
        } else if (customerType.equals("VIP")) {
            return amount * 0.8;
        }
        return amount;
    }

abstract class Discount {
    public double calculate(double amount) {
        return amount;
    }
}

class RegularDiscount extends Discount {
    @Override
    public double calculate(double amount) {
        return amount * 0.9;
    }
}

class VIPDiscount extends Discount {
    @Override
    public double calculate(double amount) {
        return amount * 0.8;
    }
}

class DiscountFactory {
    public static Discount getDiscount(String customerType) {
        switch (customerType) {
            case "Regular":
                return new RegularDiscount();
            case "VIP":
                return new VIPDiscount();
            default:
                return new Discount();
        }
    }
}





class Rectangle {
    private int width;
    private int height;

    public void setWidth(int width) {
        this.width = width;
    }

    public void setHeight(int height) {
        this.height = height;
    }
    //get methods are removed for short
}

class Square extends Rectangle {
    public void setWidth(int width) {
        super.setWidth(width);
        super.setHeight(width); // Force height to match width
    }

    public void setHeight(int height) {
        super.setWidth(height); // Force width to match height
        super.setHeight(height);
    }
}











interface Shape {
    int getArea();
}

class Rectangle implements Shape {
    private int width;
    private int height;

    public void setWidth(int width) {
        this.width = width;
    }
//getters are removed for short
    public void setHeight(int height) {
        this.height = height;
    }
}

class Square implements Shape {
    private int side;

    public void setSide(int side) {
        this.side = side;
    }
    //getters are removed for short
}





interface Appliance {
    void blend(String item);
    void toast(String item);
}

class Blender implements Appliance {
    public void blend(String item) {
        System.out.println("Blending " + item);
    }

    public void toast(String item) {
        System.out.println("Blender cannot toast!");
    }
}

class Toaster implements Appliance {
    public void blend(String item) {
        System.out.println("Toaster cannot blend!");
    }

    public void toast(String item) {
        System.out.println("Toasting " + item);
    }
}



interface Blendable {
    void blend(String item);
}

interface Toastable {
    void toast(String item);
}

class Blender implements Blendable {
    public void blend(String item) {
        System.out.println("Blending " + item);
    }
}

class Toaster implements Toastable {
    public void toast(String item) {
        System.out.println("Toasting " + item);
    }
}




// Low-level module: EmailNotification
class EmailNotification {
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

// High-level module: NotificationManager
class NotificationManager {
    private EmailNotification emailNotification;

    public NotificationManager() {
        emailNotification = new EmailNotification();
    }

    public void notify(String message) {
        emailNotification.send(message);
    }
}




















// Abstraction: Notification
interface Notification {
    void send(String message);
}

// Low-level module: EmailNotification
class EmailNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

// Low-level module: SMSNotification
class SMSNotification implements Notification {
    @Override
    public void send(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

// High-level module: NotificationManager
class NotificationManager {
    private Notification notification;

    public NotificationManager(Notification notification) {
        this.notification = notification;
    }

    public void notify(String message) {
        notification.send(message); 
    }
}

interface Notification {
    void send(String message);
}

class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("Sending Email: " + message);
    }
}

class SMSNotification implements Notification {
    public void send(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

class NotificationManager {
    private Notification notification;

    public NotificationManager(Notification notification) {
        this.notification = notification;
    }

    public void notify(String message) {
        notification.send(message);
    }
}