let off = true;
let count = 2;
$('.count').text(`${count}次`);
$('.zhizhen,.startText').click(function () {
    if (count == 0) {
        off = !off;
        $('.chance').show();
    } else {
        count--;
        $('.count').text(`${count}次`);
    }
    if (off) {
        off = !off;
        var timer = null;
        var random = 0;
        clearInterval(timer);
        random = Math.random() * 10 * 360;
        angle = 0;
        score = ['折扣0.1折', '满1000元抵用10券', '1元现金红包', '20金币', '20元现金红包', '折扣0.5折', '满1000元抵用50券', '5元现金红包'];

        timer = setInterval(function () {
            angle += 3;
            if (angle < random) {
                $('.dipan').rotate(angle);
            } else {
                clearInterval(timer);
                off = !off;
                $('.lucky').show();
                let finalAngle = random % 360;
                if (finalAngle >= 0 && finalAngle <= 45) {
                    $('.luckyScore').text(score[0]);
                } else if (finalAngle > 45 && finalAngle <= 90) {
                    $('.luckyScore').text(score[1]);
                } else if (finalAngle > 90 && finalAngle <= 135) {
                    $('.luckyScore').text(score[2]);
                } else if (finalAngle > 135 && finalAngle <= 180) {
                    $('.luckyScore').text(score[3]);
                } else if (finalAngle > 180 && finalAngle <= 225) {
                    $('.luckyScore').text(score[4]);
                } else if (finalAngle > 225 && finalAngle <= 270) {
                    $('.luckyScore').text(score[5]);
                } else if (finalAngle > 270 && finalAngle <= 315) {
                    $('.luckyScore').text(score[6]);
                } else if (finalAngle > 315 && finalAngle <= 360) {
                    $('.luckyScore').text(score[7]);
                }
            }
        }, 10);
    }
})
//叉号和确定按钮点击事件
$('.close,.ok').click(function () {
    $('.chance').hide();
    $('.lucky').hide();
    $('.rule').hide();
    $('.record').hide();
})
//规则显示
$('.ruleShow').click(function () {
    $('.rule').show();
})
$('.recordShow').click(function () {
    $('.record').show();
})
