<template>
    <div class="mt-12" :class="{'d-none': totalScore > 0}">
        <v-row class="mx-3 mt-12">
            <template v-for="(item, i) in questions" :key="i">
                <v-col class="px-1">
                    <div class="step" :class="{ 'progress': i < step }"></div>
                </v-col>
            </template>
        </v-row>
        <v-row>
            <template v-for="(item, i) in questions" :key="i">
                <v-card width="100%" class="ma-8 pa-4" :class="{ 'd-none': step != i + 1 }">
                    <v-card-title>
                        <h1 style="font-family: Gloria Hallelujah;color: #C8C8C8;">
                            {{ item.title }}
                        </h1>
                    </v-card-title>
                    <v-card-title class="Qtitle">
                        {{ item.q }}
                    </v-card-title>
                    <v-card-text>
                        <template v-for="(op, j) in item.options" :key="j">
                            <div class="option mx-n2" :class="{ 'selected': op.option == collection[i]?.options[0]?.option }"
                                @click="select(op, i)">
                                {{ op.option }}
                            </div>
                        </template>
                        <div class="option mx-n2" :class="{ 'selected': other == true }" @click="knownFormOther()" v-if="i==6">
                            อื่นๆ (โปรดระบุ)
                        </div>
                        <v-text-field v-if="other == true"
                            label="โปรดระบุ"
                            required
                            v-model="fromOther"
                        ></v-text-field>
                    </v-card-text>
                </v-card>
            </template>
        </v-row>
        <v-row justify-space-between class="mx-3">
            <v-col cols="3">
                <v-btn class="navbtn" rounded variant="flat" block size="x-large" @click="previous">
                    กลับ
                </v-btn>
            </v-col>
            <v-col cols="9">
                <v-btn class="navbtn" rounded variant="flat" block color="#f7c116" size="x-large" @click="continuex()" v-if="step != 7">
                    ต่อไป
                </v-btn>
                <v-btn class="navbtn" rounded variant="flat" block color="#f7c116" size="x-large" @click="continuex()" v-else>
                    ดูผลลัพท์
                </v-btn>
            </v-col>
        </v-row>
    </div>
    <div class="mt-12" v-if="totalScore>0">
        <TestResult :score="totalScore" :message="message"/>
    </div>
</template>
<script lang="ts">
import { Question, Option } from '@/types/question';
import { defineComponent, PropType } from 'vue';
import TestResult from './TestResult.vue';

export default defineComponent({
    components:{
        TestResult
    },
    data() {
        return {
            step: 1,
            collection: [] as Question[],
            other: false,
            fromOther: '',
            totalScore: 0 ,
            message:''
        }
    },
    props: {
        questions: {
            required: true,
            type: Array as PropType<Question[]>
        }
    },
    mounted() {
        this.collection = this.questions.map((item) => {
            return { title: item.title, q: item.q, options: [] }
        })
    },
    methods: {
        select(option: Option, index: number) {
            if (this.collection[index].options.length == 0) {
                this.collection[index].options.push(option)
            } else {
                this.collection[index].options[0] = option
            }
            // console.log(this.collection, index, index2);

            // console.log(this.collection[index]?.options[0]?.option == option.option, this.collection[index]?.options[0]?.option);
        },
        previous() {
            if (this.step > 1) {
                this.step--
            } else {
                this.$router.push('/')
            }
        },
        continuex() {
            if(this.collection.every( item => item.options.length > 0) && this.step == 7){
                this.collection.map(item=> this.totalScore += item.options[0].score)
                console.log(this.totalScore);
                this.message = 'คุณรู้จัก Globish ผ่าน '+ this.collection[6].options[0].option 
                if (this.fromOther.trim() != '') {
                    this.message += ', '+this.fromOther
                }
            }else if (this.collection[this.step-1].options.length == 1) {
                this.step++
            }
            // if(this.totalScore!=0)
        },
        knownFormOther() {
            this.other = true
        }
    }
})
</script>
<style scoped lang="scss">
.step {
    background-color: white;
    border-radius: 16px;
    width: auto;
    height: 9px;
}

.option {
    background-color: white;
    border: 1px solid;
    border-radius: 16px;
    width: auto;
    height: 72px;
    max-height: 72px;
    margin: 18px;
    align-items: center;
    display: flex;
    padding: 16px;
}

.selected {
    background-color: #f57c4a;
}

.progress {
    background-color: black;
}

.navbtn {
    border: 2px solid;
}

.Qtitle {
    height: auto;
    white-space: normal;
}
</style>