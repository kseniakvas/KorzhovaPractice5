function author(i) {
    let text = document.getElementById("text");
        switch (i) {
            case 1:
                text.innerHTML = ("Мова — це глибина тисячоліть.");
                alert("Висловлювання М. Шумила");
                break;
            case 2:
                text.innerHTML = ("Той, хто в біді кидає свій народ, стає його ворогом.");
                alert("Висловлювання Ч. Айтматова");
                break;
            case 3:
                text.innerHTML = ("Де немає свободи, там немає і вітчизни.");
                alert("Висловлювання П. Гольбаха");
                break;
            case 4:
                text.innerHTML = ("В своїй хаті своя й правда, І сила, і воля.");
                alert("Висловлювання Т. Шевченка");
                break;
            case 5:
                text.innerHTML = ("Вітчизна — ось і альфа, і омега!");
                alert("Висловлювання Д. Павличка");
                break;
            default:
                break;
        }
    }