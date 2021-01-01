<template>
  <div>
    <h3>
      POSTS 작성 페이지
      <button @click="onClickBackBtn">목록으로</button>
    </h3>

    <!-- 디자인 없이..
    <div>
      <div>
        $store.state.post.isLoadingPostAdd : {{$store.state.post.isLoadingPostAdd}}
      </div>
      <div>
        $store.state.post.donePostAdd : {{$store.state.post.donePostAdd}}
      </div>
      <div>
        $store.state.post.errorPostAdd : {{$store.state.post.errorPostAdd}}
      </div>
      <form name="normal-form" @submit.prevent="onSubmitForm">
        <div v-if="formErrors.length > 0">
          <b>Please correct the following error(s):</b>
          <div v-for="(item, index) in formErrors" :key="index">
            <span style="color: red">{{ item.text }}</span>
          </div>
        </div>
        <p>
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="title">
        </p>
        <p>
          <label for="content">Content</label>
          <input type="text" name="content" id="content" v-model="content">
        </p>
        <p>
          <label for="author">Author</label>
          <input type="text" name="author" id="author" v-model="author">
        </p>
        <p>
          <input type="submit" value="Submit" :disabled="$store.state.post.isLoadingPostAdd">
        </p>
      </form>
    </div>
    -->

    <!-- antd 반영 -->
    <div>
      <a-card hoverable style="width: 100%">
        <a-form
          :form="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 12 }"
          @submit="onSubmitForm_">
          <a-form-item label="Title">
            <a-input
              v-decorator="['title', { rules: [{ required: true, message: 'Please input Title' }] }]" />
          </a-form-item>
          <a-form-item label="Content">
            <a-input
              v-decorator="['content', { rules: [{ required: true, message: 'Please input content' }] }]" />
          </a-form-item>
          <a-form-item label="Author">
            <a-input
              v-decorator="['author', { rules: [{ required: true, message: 'Please input Author' }] }]" />
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
            <a-button
              type="primary"
              html-type="submit"
              :loading="$store.state.post.isLoadingPostAdd">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>

  </div>
</template>

<script>
const shortId = require('shortid')
const faker = require('faker')

export default {
  name: 'postsCreate',

  data () {
    return {
      form: this.$form.createForm(this, { name: 'post' }),
      formErrors: [],
      title: null,
      content: null,
      author: null
    }
  },

  created () {
    this.initialize()
  },

  /* request, prepare, on, cb, action */
  methods: {
    initialize () {
      // console.log('initialize 아무것도 안함')
    },
    onClickBackBtn () {
      this.$router.push('/posts/list')
    },
    onSubmitForm (e) {
      if (this.title && this.content && this.author) {
        const values = {
          title: this.title,
          content: this.content,
          author: this.author
        }
        this.prepareData(values)
      } else {
        this.formErrors = []
        if (this.title === null || this.title === '') this.formErrors.push({ id: 'title', text: 'title required.' })
        if (this.content === null || this.content === '') this.formErrors.push({ id: 'content', text: 'content required.' })
        if (this.author === null || this.author === '') this.formErrors.push({ id: 'author', text: 'author required.' })
        console.log('this.formErrors : ', this.formErrors)
      }
    },
    onSubmitForm_ (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
          this.prepareData(values)
        }
      })
    },
    prepareData (values) {
      const fdata = {
        id: shortId.generate(),
        title: values.title,
        content: values.content,
        image: faker.image.image(),
        animals: faker.image.animals(),
        author: values.author,
        createAt: Date.now()
      }
      this.requestSaveAPI(fdata)
    },
    async requestSaveAPI (fdata) {
      const returnCondition = await this.$store.dispatch('post/POST_ADD', { fdata })
      console.log('requestAPI returnCondition: ', returnCondition)
    }
  }

}
</script>

<style>

</style>
