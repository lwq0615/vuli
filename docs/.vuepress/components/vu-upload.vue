<template>
    <div 
    :class="`vu-upload_container ${droping ? 'drop' : ''}`"
    @dragover="dropable && dragover($event)" 
    @drop="dropable && drop($event)"
    @dragleave="dropable && (droping = false)">
        <input 
        type="file" 
        :accept="accept" 
        :multiple="multiple" 
        @change="filesChange"
        ref="upload">

        <a ref="a"></a>

        <vu-button 
        size="small" 
        @click="inputFiles" 
        style="margin-left:7px;" 
        v-if="type === 'file'"
        color="error">
            上传文件
        </vu-button>

        <p class="tip">{{tip}}</p>

        <div class="files" v-if="type === 'file'">
            <div 
            class="file-item"
            v-for="(item,index) in fileList"
            :key="index">
                <p 
                class="file-item-name"
                @click="$emit('fileClick',item)">
                    <span class="file-icon">📄 </span>
                    {{item.name}}
                    <span class="close-icon" @click="delFile(item)">×</span>
                    <span class="over-icon" v-show="progress[index] === 100">✔</span>
                </p>
                <div class="progress" :style="`width:${progress[index]}%;`"></div>
            </div>
        </div>

        <div class="images" v-else-if="type === 'image'">
            <div class="relative" v-for="(item,index) in fileList" :key="index">
                <img 
                class="image-item"
                :style="cutTypeStyle"
                :src="getBlob(item)" 
                @click="bigImage(item)"
                :alt="item.name">

                <span class="close-icon" @click="delFile(item)">×</span>
                
                <div class="progress" :style="`width:${progress[index]}%;`"></div>
            </div>
            <div class="input relative" @click="inputFiles">+</div>
        </div>
    </div>
</template>

<script>
import vuButton from './vu-button.vue'
import message from './message/index.js'
import request from './upload-http.js'
import imageLight from './image-light/index.js'
export default {
    name: 'vu-upload',
    components: {
        vuButton
    },
    props: {
        accept: String,
        multiple: {
            type: Boolean,
            default: true
        },
        fileList: {
            type: Array,
            required: true
        },
        tip: {
            type: String,
            default: '点击上传文件'
        },
        limit: Number,
        autoUpload: {
            type: Boolean,
            default: false
        },
        name: String,
        action: String,
        type: {
            type: String,
            default: 'file'
        },
        cutType: {
            type: String,
            default: 'cover'
        },
        headers: Object,
        data: [Object,Function],
        dropable: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            progress: [],
            droping: false
        }
    },
    computed: {
        cutTypeStyle(){
            return `object-fit: ${this.cutType};`
        }
    },
    watch: {
        fileList(newVal,oldVal){
            if(newVal !== oldVal){
                throw new Error("prop fileList is readonly")
            }
            this.$emit('change',newVal)
        }
    },
    methods: {
        filesChange(e){
            let files = e.target.files
            let exceedFiles = []
            for(let key of Object.keys(files)){
                let file = files[key]
                let types = this.accept ? this.accept.toLowerCase().split(',') : null
                let type = file.name.split('.')[file.name.split('.').length-1].toLowerCase()
                if(types && !types.includes(type)){
                    message.warning({
                        content: file.name+' 不是允许上传的文件类型',
                        close: true
                    })
                }else{
                    if(typeof this.limit === 'number' && this.fileList.length === this.limit){
                        message.warning({
                            content: '超出最大上传数量',
                            close: true
                        })
                        exceedFiles.push(file)
                    }else{
                        this.fileList.push(file)
                    }
                }
            }
            this.$refs.upload.value = null
            if(this.autoUpload){
                this.upload()
            }
            if(exceedFiles.length){
                this.$emit('exceed',exceedFiles)
            }
        },
        getFiles(){
            return this.fileList
        },
        inputFiles(){
            this.$refs.upload.click()
        },
        delFile(file){
            window.event.stopPropagation()
            let index = this.fileList.indexOf(file)
            this.$emit('remove',this.fileList[index])
            this.fileList.splice(index,1)
            this.progress.splice(index,1)
        },
        clear(){
            this.fileList.splice(0)
        },
        upload(){
            this.$emit('upload')
            if(!this.action){
                return
            }
            let that = this
            let uploading = 0
            let successFiles = []
            for(let i in this.fileList){
                let file = this.fileList[i]
                if(this.progress[i] === 100){
                    continue
                }
                uploading++
                this.$emit('start',file)
                let data = null
                if(typeof this.data === 'object'){
                    data = {...this.data}
                }else if(typeof this.data === 'function'){
                    data = this.data(file)
                }
                request(this.action,file,{
                    onprogress: (e) => {
                        that.progress[i] = Math.floor(e.loaded/e.total*100)
                        that.progress = that.progress.slice()
                        this.$emit('progress',e,file)
                    },
                    onload: (e) => {
                        this.$emit('end',e,file)
                        successFiles.push(file)
                        if(--uploading === 0){
                            this.$emit('success',successFiles)
                        }
                    },
                    onerror: (err) => {
                        this.$emit('error',err,file)
                    },
                    name: this.name
                },this.headers,data)
            }
        },
        getBlob(file){
            return window.URL.createObjectURL(file)
        },
        bigImage(file){
            this.$emit('fileClick',file)
            imageLight(window.URL.createObjectURL(file))
        },
        dragover(e){
            e.preventDefault()
            this.droping = true
        },
        drop(e){
            e.preventDefault()
            let obj = {
                target: {
                    files: e.dataTransfer.files
                }
            }
            this.filesChange(obj)
            this.droping = false
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-upload_container {
    display: inline-block;
    width: 400px;
    padding: 5px;
    border-radius: 3px;
    input {
        display: none;
    }
    .tip {
        color: #606266;
        font-size: 13px;
        margin: 5px 0;
        padding-left: 7px;
    }
    .files {
        width: 100%;
        .file-item {
            margin: 0;
            padding: 7px 7px;
            box-sizing: border-box;
            border-radius: 3px;
            font-size: 14px;
            color: #606266;
            cursor: pointer;
            transition: all ease 0.2s;
            position: relative;
            .file-item-name {
                margin: 0;
                .file-icon {
                    font-size: 13px;
                }
            }
            .close-icon {
                position: absolute;
                right: 7px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 18px;
                display: none;
                user-select: none;
            }
            .over-icon {
                position: absolute;
                right: 7px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 13px;
                user-select: none;
            }
            .progress {
                height: 3px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #e44258;
                border-radius: 100px;
            }
        }
        .file-item:hover {
            background-color: #f5f7fa;
            color: #e44258;
            .close-icon {
                display: block;
            }
            .over-icon {
                display: none;
            }
        }
    }
    .images {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .relative {
            position: relative;
            margin: 3px 4px;
            cursor: pointer;
            height: 120px;
            width: 120px;
            .image-item {
                width: 100%;
                height: 100%;
                border-radius: 5px;
                object-fit: cover;
            }
            .close-icon {
                position: absolute;
                right: 5px;
                top: 5px;
                width: 20px;
                height: 20px;
                font-size: 18px;
                display: none;
                color: white;
                background-color: rgba($color: #000000, $alpha: 0.3);
                border-radius: 50%;
                align-items: center;
                justify-content: center;
                font-family: Avenir, Helvetica, Arial, sans-serif;
                user-select: none;
            }
            .progress {
                height: 3px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #e44258;
                border-radius: 100px;
            }
        }
        .relative:hover {
            .close-icon {
                display: flex;
            }
        }

        
        .input {
            background-color: #fbfdff;
            border: 1px dashed #c0ccda;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 40px;
            font-family: Avenir, Helvetica, Arial, sans-serif;
            color: #606266;
            user-select: none;
        }
    }
}

.vu-upload_container.drop{
    background-color: rgba($color: #e44258, $alpha: 0.05);
    border: 1px dashed #e44258;
}
</style>