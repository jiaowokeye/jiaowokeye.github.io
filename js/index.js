var Timer = null;
var Timer2 = null;
$(function () {
    initData();
})
var TIME_LINE_VUE = null;
function initData() {
    TIME_LINE_VUE = new Vue({
        el: '#app',
        data: {
            data: data,
            date: 0,
            countdown: 3,
            is_start: false,
            skill:{}
        },
        watch: {
            date: function (val, oldVal) {

            }
        },
        methods: {
            bossChange: function () {
                var index = $('#select_boss').val();
                if(index!=='-1'){
                    this.skill = this.data[index].skill;
                }
            },
            computerScope: function (date) {

            },
            start: function () {
                var index = $('#select_boss').val();
                if(index=='-1'){
                    alert('请先选择boss');
                    return;
                }
                this.is_start = true;
                if (Timer2) {
                    clearTimeout(Timer2);
                }
                Timer2 = setInterval(() => {
                    this.countdown = this.countdown-1;
                    if(this.countdown==0){
                        clearInterval(Timer2);
                        Timer = setInterval(() => {
                            this.date = this.date + 1;
                        }, 1000);
                    }
                }, 1000)
            },
            reset: function () {
                if (Timer2) {
                    clearInterval(Timer2);
                }
                if (Timer) {
                    clearInterval(Timer);
                }
                this.date = 0;
                this.countdown = 3;
                this.is_start = false;
            },
            getClass: function (key) {
                if ((key-this.date) <= 5) {
                    return 'skill_wrap active'
                } else {
                    return 'skill_wrap';
                }
            }
        }
    })

}

parseInt