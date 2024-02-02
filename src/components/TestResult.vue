<template>
    <v-card>
        <v-img
        width="100%"
        height="auto"
        cover
        :src="`${imgsrc}`"
        alt="result"
        >

        </v-img>
        <v-card-text class="d-flex justify-center align-center mt-12 mb-12" style="white-space: normal;">
            <h2>
                {{ message }}
            </h2>
        </v-card-text>
    </v-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        score: {
            required: true,
            type: Number
        },
        message:{
            required: true,
            type: String
        }
    },
    data() {
        return {
            imgsrc: ''
        }
    },
    mounted() {
        if (this.score <= 90) {
            this.imgsrc = 'https://s3-alpha-sig.figma.com/img/8b7a/d5c2/867f0129dd634518c36601014534b40b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IjnqQP0p~VyPCQSMz1vgs2N9bqxfFGZlIyp9bNy6UjIFZA4pdoqp4eD~~fc-dodGGHhER~yXcf4LZc2E8ZvM9MSEz1IzAriNCkG0w80ssBgZ1JenbyZ-V-pMqpk1QGmzEYylzO9Uqj3MdNFv2aIKbo2iKNXXne-YMTaniD3VilWfdMWEDGvDdec-f4VvGDonNBimRylbkKQ4vmXYkNY9vDIiP94vvqWOoJUojRNGZWp4-J2kgzfNRkVQZB4dPFo23xPV2u-CmU1QYObn1eNDawxJSrl0ti5o3Pk5X0dnGVW5T~NQm8lJ6AO14jBTqFM~llqycXkC5tM1UtGFLwRR6A__'
        }else if(this.score <= 130){
            this.imgsrc = 'https://s3-alpha-sig.figma.com/img/bf62/9d98/5f70e677c0dfa1e9c40a04b2e74fec17?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UOPPktnncGwJrk7Q2IR8leeu5m9jLk7BH9vzGpNArtkYoWfG-6c0tUbH9dHv~0-tpqzLOHhO92NAc9GuBcLZ1CvOmq7~isGNhk3KKRK~BzkqSjnV2I-YOsRclkRM-SDv--oSN3TnWWQ7nllKRuIM83STq5vxKfGlEmgNbq3kSvFL3GX0rxAna4GoFttsmEfKMJWvlp8rGQICh33CYLvSPg-NPpH6OhJJLCFatReOOaIdCjsQ9VXHjtd7TVcf9ex7q0HZ8RixeHAJ8FbAmnwPrjQipFVDTOOudgcPNzPyE4csdBtJ6E~LfCBJuWmhUy69hqIPArGp7Kl~Q6R-YxV2Sg__'
        }else{
            this.imgsrc = 'https://s3-alpha-sig.figma.com/img/c41e/00f0/d980e07aa7bf763569547badd0d9d731?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V~Iy6yUT2DUJ42~fbx3kHMhwGc-HGSJ5o7e5ow~p5kI6wlIJK0CVrsrM5UJC7HYF6Ge-ePExXt57ZwkljlIEt3fXbOOK-mMmXHYOSMt4mIDKCllVZWY5A6UNsy4purXCwAj~iiLMft4hI01VZjJu71wn1Elr~EUrGDmAe9AkMU6AmTeo1theFY9L6ooF8x5BXWD1JYZaVrBzdQe-eiviqZ~ec1fZ5pYWfKOVs7qgdh6s4CdxOJC6NNJ0GpCy7D1ubdCHUUCXh0WpC7mCXgNfJQN6aUSNA4RkMm~PenxkOIkio9kMWs7gTvTEp7qqhRXkyZoEMVG-0obMA9iD4JvvpA__'
        }
    },
})
</script>
<style lang="scss">
    
</style>