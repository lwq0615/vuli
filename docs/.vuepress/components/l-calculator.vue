<template>
    <div class="l-calculator_container">
        <div class="grid">
            <div class="window">{{e}}</div>
            <button class="(" @click="append('(')">(</button>
            <button class=")" @click="append(')')">)</button>
            <button class="%" @click="append('%')">%</button>
            <button class="C blackFont" @click="clear">C</button>
            <button class="7 whiteBack blackFont" @click="append('7')">7</button>
            <button class="8 whiteBack blackFont" @click="append('8')">8</button>
            <button class="9 whiteBack blackFont" @click="append('9')">9</button>
            <button class="÷" @click="append('÷')">÷</button>
            <button class="4 whiteBack blackFont" @click="append('4')">4</button>
            <button class="5 whiteBack blackFont" @click="append('5')">5</button>
            <button class="6 whiteBack blackFont" @click="append('6')">6</button>
            <button class="×" @click="append('×')">×</button>
            <button class="1 whiteBack blackFont" @click="append('1')">1</button>
            <button class="2 whiteBack blackFont" @click="append('2')">2</button>
            <button class="3 whiteBack blackFont" @click="append('3')">3</button>
            <button class="-" @click="append('-')">-</button>
            <button class="0 whiteBack blackFont" @click="append('0')">0</button>
            <button class=". whiteBack" @click="append('.')">.</button>
            <button class="= whiteBack" @click="compute">=</button>
            <button class="+" @click="append('+')">+</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lCalculator',
    data(){
        return {
            e: ''
        }
    },
    methods: {
        compute(){
            let evalE = this.e.replace(/×/,'*').replace(/÷/,'/')
            try{
                let res = eval(evalE)
                this.e = this.e+'='+res
            }catch{
                this.e = '格式错误'
            }
            this.$emit('compute',this.e.split('=')[1] || '格式错误')
        },
        append(char){
            if(this.e === '格式错误' || this.e.includes('=')){
                this.e = ''
            }
            this.e += char
            this.$emit('input',char)
        },
        clear(){
            this.e = ''
            this.$emit('clear')
        }
    }
}
</script>

<style lang="scss" scoped>
.l-calculator_container {
    display: inline-block;
    width: 300px;
    border-radius: 3px;
    overflow: hidden;
    .grid {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: repeat(7, 50px);

        button {
            cursor: pointer;
            border-radius: 0;
            border: 1px solid #e4e7ed;
            background-color: #f9f9f9;
            color: #e44258;
            font-size: 16px;
        }
        button:active{
            background-color: #F2F2F2;
        }

        .whiteBack {
            background-color: #fff;
        }
        .whiteBack:hover {
            background-color: #f9f9f9;
        }
        .whiteBack:active {
            background-color: #F2F2F2;
        }

        .blackFont {
            color: black;
        }

        .window {
            grid-column-start: 1;
            grid-column-end: 5;
            grid-row-start: 1;
            grid-row-end: 3;
            background-color: #f5f2f0;
            border: 1px solid #e4e7ed;
            text-align: left;
            padding: 10px;
            font-size: 18px;
        }
    }
}
</style>