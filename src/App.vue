<template>
  <div class="pl-2">
    <el-breadcrumb>
      <el-breadcrumb-item>A</el-breadcrumb-item>
      <el-breadcrumb-item>B</el-breadcrumb-item>
      <el-breadcrumb-item>C</el-breadcrumb-item>
    </el-breadcrumb>

    <el-alert @close="handleAlertClose" title="hello world" type="success"> </el-alert>

    <el-alert type="info" :closable="false" title="hello world can't close"> </el-alert>

    <el-table :data="[]">
      <el-table-column label="name" prop=""></el-table-column>
      <el-table-column label="gender" prop=""></el-table-column>
    </el-table>

    <h1 class="text-2xl mb-4">
      ElementPlus Message & MessageBox Component & Loading Components etc.
    </h1>
    <div>
      <h2 class="text-lg">MessageBox test</h2>
      <button @click="showMessage">message</button>
      <button @click="showMessageStatic">message static</button>
      <button @click="showMessagePrompt">showMessagePrompt</button>
      <button @click="showMessagePromptStatic">showMessagePromptStatic</button>
    </div>

    <div class="mt-4">
      <h2>
        ElScroll & ElCarousel
        <button @click="showElScrollAndElCarousel">
          {{ isShowElScrollAndElCarousel ? "hide" : "show" }}
        </button>
      </h2>
      <div v-show="isShowElScrollAndElCarousel">
        <div class="mt-4">
          <h2>El Scroll (very simple version)</h2>
          <el-scroll>
            <div :style="{ height: '1000px' }">334</div>
            <div>bottom</div>
          </el-scroll>
        </div>

        <div class="mt-4">
          <h2>El Carousel</h2>
          <el-carousel style="height: 300px" :interval="5000">
            <el-carousel-item
              :style="{
                background: bg,
                height: '100%',
                color: 'white',
                'font-size': '2rem',
              }"
              v-for="{ content, bg } in carouselList"
            >
              {{ content }}
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <h2>El Slider currentSlideValue: {{ currentSlideValue }}</h2>
      <el-slider
        style="width: 200px; margin-left: 100px"
        v-model="currentSlideValue"
      ></el-slider>
    </div>

    <div class="mt-4">
      <h2>El Image</h2>
      <el-image
        src="https://www.23google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      >
        <template #placeholder> loading </template>
        <template #error> load image failed </template>
      </el-image>
    </div>

    <div class="mt-4">
      <h2>ElPagination - currentPage: {{ currentPage }}</h2>
      <el-pagination
        @page-change="handlePageChange"
        :total="100"
        :current-page="currentPage"
        :page-size="5"
      ></el-pagination>
    </div>

    <div class="mt-4">
      <h2>ElSelectList(fake comp) {{ selcteListValue }} - selected</h2>
      <el-select-list v-model="selcteListValue">
        <el-select-list-item
          v-for="item in selectListData"
          v-bind="item"
        ></el-select-list-item>
      </el-select-list>
    </div>

    <div class="mt-4">
      <h2 class="text-lg">Message test</h2>
      <button @click="Message.info({ message: 'nihao' })">Info Message</button>
      <button @click="Message({ type: 'warning', message: 'nihao' })">
        Warning Message
      </button>
      <button @click="Message.danger({ message: 'nihao' })">Error Message</button>
      <button @click="Message({ type: 'success', message: 'nihao', duration: 5000 })">
        Success Message
      </button>
    </div>

    <div class="mt-4">
      <h2 class="text-lg">el-loading</h2>
      <button @click="showLoading">Show loading</button>
      <button v-loading="true">loading</button>
    </div>

    <!-- <ElTableTest /> -->
    <div>Active Index: {{ activeCollapseIndex }}</div>
    <el-collapse @input="handleChange" v-model="activeCollapseIndex">
      <el-collapse-item index="0" title="hello world">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti libero
        similique assumenda ratione dolorem tempore aperiam amet quam. Nobis veritatis
        delectus commodi? Sint ratione maiores deleniti eius tempore, accusantium rerum.
        Voluptates, saepe nihil delectus at ex animi dolorem numquam nemo. Incidunt eum
        eveniet quidem rem provident recusandae doloremque dolore tempora accusamus
        ratione, maxime sint laborum voluptatem at iure eligendi? Molestiae?
      </el-collapse-item>

      <el-collapse-item index="1" title="hello world">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti libero
        similique assumenda ratione dolorem tempore aperiam amet quam. Nobis veritatis
        delectus commodi? Sint ratione maiores deleniti eius tempore, accusantium rerum.
        Voluptates, saepe nihil delectus at ex animi dolorem numquam nemo. Incidunt eum
        eveniet quidem rem provident recusandae doloremque dolore tempora accusamus
        ratione, maxime sint laborum voluptatem at iure eligendi? Molestiae?
      </el-collapse-item>
    </el-collapse>

    <InfiniteScroll></InfiniteScroll>

    <VirtualList :listHeight="300" :rowHeight="50" :data="virtualListData"></VirtualList>

    <div>
      <el-steps :active="activeStep">
        <el-step></el-step>
        <el-step></el-step>
        <el-step></el-step>
      </el-steps>

      <button @click="nextStep">next</button>
    </div>

    <BackToTop></BackToTop>

    <h2>Notification(Non-animation ver.)</h2>
    <button @click="showNotification">show notification</button>

    <h2>El-Progress</h2>
    <el-progress :progress="progress"></el-progress>
    <button @click="incProgress">incProgress</button>

    <el-badge :value="13">
      <button>hot</button>
    </el-badge>

    <h2>El-Switch (Switch: {{ swithcState }})</h2>
    <el-switch v-model="swithcState"></el-switch>

    <h2>
      Masonry
      <button @click="toggleMasonry">{{ isShowMasonry ? "hide" : "show" }}</button>
    </h2>
    <el-masonry v-show="isShowMasonry"></el-masonry>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { MessageBox } from "./components/MessageBox";
import Message from "./components/Message";
import InfiniteScroll from "./components/InfiniteScroll/index.vue";
import VirtualList from "./components/VirtualList/index.vue";
import BackToTop from "./components/BacktoTop/index.vue";

import ElCollapse from "./components/ElCollapse/collapse.vue";
import ElMasonry from "./components/masonry/index.vue";

import ElCollapseItem from "./components/ElCollapse/collapse-item.vue";

import ElScroll from "./components/ElScroll/scroll-container.vue";

import ElCarousel from "./components/ElCarousel/carousel.vue";
import ElCarouselItem from "./components/ElCarousel/carousel-item.vue";

import ElBreadcrumb from "./components/ElBreadcrumb/ElBreadcrumb.vue";
import ElBreadcrumbItem from "./components/ElBreadcrumb/ElBreadcrumbItem.vue";

import ElSteps from "./components/ElSteps/steps.vue";
import ElStep from "./components/ElSteps/step.vue";

import ElSelectList from "./components/ElSelectList/SelectList.vue";
import ElSelectListItem from "./components/ElSelectList/SelectListItem.vue";

import ElPagination from "./components/ElPagination/pagination.vue";

import Loading from "./components/Loading/index.js";

import Notification from "./components/Notification";

import ElProgress from "./components/Progress/index.vue";

import ElBadge from "./components/ElBadge/index.vue";

import ElSwitch from "./components/ElSwitch/index.vue";

import ElImage from "./components/ElImage/index.vue";

import ElAlert from "./components/ElAlert/index.vue";

import ElSlider from "./components/ElSlider/index.vue";

const currentPage = ref(1);
const handlePageChange = (page) => {
  currentPage.value = page;
};

const currentSlideValue = ref(20);

const isShowElScrollAndElCarousel = ref(false);
const showElScrollAndElCarousel = () => {
  isShowElScrollAndElCarousel.value = !isShowElScrollAndElCarousel.value;
};

const handleAlertClose = () => {
  alert("close");
};

const carouselList = ref([
  { content: "item1", bg: "grey" },
  { content: "item2", bg: "grey" },
  { content: "item3", bg: "grey" },
  { content: "item4", bg: "grey" },
]);

const swithcState = ref(false);
const selcteListValue = ref("");
const selectListData = ref([
  { label: "1 + 1 = 2", value: 2 },
  { label: "2 + 3 = 5", value: 5 },
  { label: "6 + 6 = 12", value: 12 },
]);

let clickCnt = 0;
const showNotification = () => {
  const close = Notification({
    message: "hello world " + clickCnt++,
  });

  setTimeout(close, 3000);
};

function scale(value, min, max) {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}

let progress = ref(0);
const incProgress = () => {
  progress.value = scale(progress.value + 10, 0, 100);
};

const isShowMasonry = ref(false);
const toggleMasonry = () => {
  isShowMasonry.value = !isShowMasonry.value;
};

const showMessage = () => {
  MessageBox({
    title: "提示",
    message: "hello world",
    ok: "OK",
    cancel: "Cancel",
    type: "confirm",
  })
    .then(() => {
      console.log("normal message ok");
    })
    .catch(() => {
      console.log("normal message cancel");
    });
};

const showMessagePrompt = () => {
  MessageBox({
    title: "提示",
    ok: "OK",
    cancel: "Cancel",
    type: "prompt",
  })
    .then((value) => {
      console.log("normal message ok:", value);
    })
    .catch(() => {
      console.log("normal message cancel");
    });
};

const showMessageStatic = () => {
  MessageBox.confirm({
    title: "hello",
    ok: "ok",
    message: "how are you?",
  });
};

const showMessagePromptStatic = () => {
  MessageBox.prompt({
    title: "hello",
    ok: "Ok",
    cancel: "Cancel",
  });
};

const showLoading = () => {
  const inst = Loading.show();
  setTimeout(() => {
    inst.close();
  }, 1000);
};

const activeCollapseIndex = ref(0);
const handleChange = (value) => {
  activeCollapseIndex.value = value;
};
const virtualListData = ref([...Array.from({ length: 10000 }).map((_, idx) => idx)]);

const activeStep = ref(0);
const nextStep = () => {
  activeStep.value++;
  if (activeStep.value > 3) {
    activeStep.value = 0;
  }
};
</script>

<style scoped>
button {
  @apply rounded mt-2 mr-2 px-2 py-1 border border-light-900 bg-light-600;
}
</style>
