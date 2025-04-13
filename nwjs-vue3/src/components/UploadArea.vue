<template>
  <div class="upload-area" @click="onUpload">
    <input ref="fileInput" type="file" v-show="false" :accept="accept" :multiple="multiple" :nwdirectory="nwDir" @change="handleFileInputChange">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/**
 * 上传组件
 * 
 * @param {String} modelValue 绑定本地路径
 * @param {String} accept 文件类型
 * @param {Boolean} multiple 是否多选
 * @param {Boolean} nwDir 是否为文件夹选择
 * @param {Function} beforeChoose 选择前回调
 */
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  accept: {
    type: String,
    default: '*/*'
  },
  multiple: {
    type: Boolean,
    default: false
  },
  nwDir: {
    type: Boolean,
    default: false
  },
  beforeChoose: {
    type: Function,
    default: () => true
  }
});

const emit = defineEmits(['choose', 'update:modelValue']);

// 文件输入框
const fileInput = ref();
const onUpload = () => {
  fileInput.value.click();
}

// 文件输入框值改变
const handleFileInputChange = () => {
  const files = fileInput.value.files;
  if (props.beforeChoose) {
    const result = props.beforeChoose(files);
    if (!result) {
      fileInput.value.value = '';
      return
    };
  }
  if (props.multiple) {
    emit('update:modelValue', files.map(file => file.path).join(','));
  } else {
    emit('update:modelValue', files[0].path);
  }
  emit('choose', files);
  // 清空文件输入框 方便下次选择
  fileInput.value.value = '';
}

</script>

<style scoped>
.upload-area {
  display: inline-block;
}
</style>