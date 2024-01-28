<script setup lang="ts">
import type { Member } from './Member'
import { computed } from 'vue'
const props = defineProps<{
  member: Member
}>()

const avatarUrl = computed(() => {
  return (
    props.member.avatarPic ??
    `https://q1.qlogo.cn/g?b=qq&nk=${props.member.qq}&s=640`
  )
})
</script>

<template>
  <article class="TeamMember">
    <Link
      v-if="member.sponsor"
      class="sponsor"
      :href="`https://github.com/sponsors/${member.socials?.github}`"
      no-icon
    >
      <svg i-ic-sharp-favorite class="sponsor-icon" /> 赞助
    </Link>

    <figure class="avatar">
      <img
        class="avatar-img skeleton"
        onload="this.classList.toggle('skeleton')"
        :src="avatarUrl"
        :alt="`${member.name}'s Profile Picture`"
      />
    </figure>

    <div class="data">
      <h1 class="name">{{ member.name }}</h1>
      <p class="org">
        {{ member.title }}
        <span v-if="member.company" class="nowrap">
          @
          <Link
            v-if="member.companyLink"
            class="company link"
            :href="member.companyLink"
            :no-icon="true"
          >
            {{ member.company }}
          </Link>
          <span v-else class="company">
            {{ member.company }}
          </span>
        </span>
      </p>

      <div class="profiles">
        <section v-if="member.projects" class="desc">
          <div class="desc-title">
            <h2 class="sr-only">Projects</h2>
            <svg i-ph-code-bold class="desc-icon code" />
          </div>
          <ul class="desc-list">
            <li
              v-for="project in member.projects"
              :key="project.label"
              class="desc-item"
            >
              <Link class="desc-link" :href="project.url" :no-icon="true">
                {{ project.label }}
              </Link>
            </li>
          </ul>
        </section>

        <section v-if="member.location" class="desc">
          <div class="desc-title">
            <h2 class="sr-only">Location</h2>
            <svg i-ic-sharp-location-on class="desc-icon" />
          </div>
          <p class="desc-text">
            {{ member.location }}
          </p>
        </section>

        <section v-if="member.languages" class="desc">
          <div class="desc-title">
            <h2 class="sr-only">Languages</h2>
            <svg i-ic-round-language class="desc-icon" />
          </div>
          <ul class="desc-list">
            <li
              v-for="language in member.languages"
              :key="language"
              class="desc-item"
            >
              {{ language }}
            </li>
          </ul>
        </section>

        <section v-if="member.website" class="desc">
          <div class="desc-title">
            <h2 class="sr-only">Website</h2>
            <svg
              i-ic-baseline-attachment
              class="desc-icon"
              style="transform: rotate(135deg)"
            />
          </div>
          <p class="desc-text">
            <Link class="desc-link" :href="member.website.url" :no-icon="true">
              {{ member.website.label }}
            </Link>
          </p>
        </section>

        <ul class="social-list">
          <li v-if="member.socials?.github" class="social-item">
            <Link
              class="social-link"
              :href="`https://github.com/${member.socials?.github}`"
              :no-icon="true"
            >
              <svg t="1706379986140" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8067" width="25" height="25"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="8068"></path></svg>
            </Link>
          </li>
          <li v-if="member.socials?.coolapk" class="social-item">
            <Link
              class="social-link"
              :href="`http://www.coolapk.com/u/${member.socials?.coolapk}`"
              :no-icon="true"
            >
              <svg t="1706379299153" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4358" width="25" height="25"><path d="M445.493333 46.72c95.733333-13.653333 195.626667 2.613333 281.493334 47.253333 92.373333 47.36 168.16 126.24 211.626666 220.48 46.986667 100.426667 56.16 217.706667 26.24 324.426667-26.24 94.293333-82.826667 180-159.573333 240.8-72.586667 58.133333-162.826667 94.24-255.68 101.013333-116.586667 10.293333-236.32-26.186667-328.053333-98.773333-66.08-51.52-117.546667-121.44-147.893334-199.466667-44.106667-112.48-42.186667-242.133333 5.226667-353.226666 61.866667-149.6 206.026667-261.226667 366.613333-282.506667M270.4 350.08c-61.76 30.453333-102.986667 98.4-99.413333 167.413333 0.693333 66.666667 42.72 130.24 102.933333 158.293334 39.253333 19.04 84.853333 21.173333 127.093333 12.64 49.12-10.293333 90.453333-41.973333 124.8-77.173334 53.6-54.72 86.453333-124.96 129.6-187.36 22.666667 41.173333 45.333333 82.346667 67.786667 123.573334-24.586667-15.786667-46.773333-35.04-72.16-49.653334-16.746667 11.946667-33.28 24.213333-50.186667 35.946667 62.08 49.013333 126.666667 94.826667 190.026667 142.186667 12.96 8.746667 27.84 23.253333 44.64 14.666666 17.6-7.146667 22.613333-30.346667 12.106667-45.44-52.373333-99.466667-108.48-196.906667-163.253334-295.093333-5.653333-13.066667-19.626667-22.773333-34.24-18.56-13.493333 2.133333-20.266667 15.52-27.146666 25.76-32.106667 52.8-61.813333 107.146667-97.44 157.76-33.866667 48.213333-77.12 96.373333-136.586667 110.88-58.026667 15.2-126.026667-14.506667-148.213333-71.68-17.813333-46.133333-2.933333-102.613333 36.533333-132.8 35.946667-29.013333 86.72-31.093333 129.386667-17.653333 42.666667 13.76 76.533333 44.48 110.773333 72.053333 17.493333-12.053333 36-23.146667 50.986667-38.4-44.96-39.84-93.013333-79.306667-151.146667-97.76-48.16-12.64-101.813333-13.12-146.88 10.4z" fill="#0f9d58" p-id="4359"></path><path d="M270.4 350.08c45.066667-23.52 98.72-23.04 146.88-10.4 58.133333 18.453333 106.186667 57.92 151.146667 97.76-14.986667 15.253333-33.493333 26.346667-50.986667 38.4-34.24-27.573333-68.106667-58.293333-110.773333-72.053333-42.666667-13.44-93.44-11.36-129.386667 17.653333-39.466667 30.186667-54.346667 86.666667-36.533333 132.8 22.186667 57.173333 90.186667 86.88 148.213333 71.68 59.466667-14.506667 102.72-62.666667 136.586667-110.88 35.626667-50.613333 65.333333-104.96 97.44-157.76 6.88-10.24 13.653333-23.626667 27.146666-25.76 14.613333-4.213333 28.586667 5.493333 34.24 18.56 54.773333 98.186667 110.88 195.626667 163.253334 295.093333 10.506667 15.093333 5.493333 38.293333-12.106667 45.44-16.8 8.586667-31.68-5.92-44.64-14.666666-63.36-47.36-127.946667-93.173333-190.026667-142.186667 16.906667-11.733333 33.44-24 50.186667-35.946667 25.386667 14.613333 47.573333 33.866667 72.16 49.653334-22.453333-41.226667-45.12-82.4-67.786667-123.573334-43.146667 62.4-76 132.64-129.6 187.36-34.346667 35.2-75.68 66.88-124.8 77.173334-42.24 8.533333-87.84 6.4-127.093333-12.64-60.213333-28.053333-102.24-91.626667-102.933333-158.293334-3.573333-69.013333 37.653333-136.96 99.413333-167.413333z" fill="#FFFFFF" p-id="4360"></path></svg>
            </Link>
          </li>
          <li v-if="member.socials?.bilibili" class="social-item">
            <Link
              class="social-link"
              :href="`https://space.bilibili.com/${member.socials?.bilibili}`"
              :no-icon="true"
            >
              <svg
                class="social-icon"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Bilibili</title>
                <path
                  d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
                />
              </svg>
            </Link>
          </li>
          <li v-if="member.socials?.gitee" class="social-item">
            <Link
              class="social-link"
              :href="`https://gitee.com/${member.socials?.gitee}`"
              :no-icon="true"
            >
              <svg t="1706380107641" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2202" id="mx_n_1706380107651" width="26" height="26"><path d="M934.4 512q0 10.3936-0.512 20.736t-1.536 20.6848q-1.024 10.2912-2.56 20.5824-1.4848 10.24-3.5328 20.4288-1.9968 10.1376-4.5056 20.224-2.56 10.0352-5.5296 19.968-3.0208 9.9328-6.5024 19.6608-3.5328 9.7792-7.4752 19.3536-3.9936 9.5744-8.3968 18.944-4.4544 9.3696-9.3184 18.5344-4.9152 9.1648-10.24 18.0224-5.3248 8.9088-11.0592 17.5616-5.7856 8.6016-11.9296 16.896-6.1952 8.3456-12.8 16.384-6.5536 7.9872-13.5168 15.6672t-14.336 15.0528q-7.3216 7.3216-15.0016 14.2848-7.68 6.9632-15.6672 13.5168-8.0384 6.6048-16.384 12.8-8.2944 6.144-16.896 11.9296-8.6528 5.7344-17.5616 11.0592-8.8576 5.3248-18.0224 10.24-9.1648 4.864-18.5344 9.3184t-18.944 8.3968q-9.5744 3.9936-19.3536 7.4752-9.728 3.4816-19.6608 6.5024-9.9328 2.9696-19.968 5.5296-10.0864 2.5088-20.2752 4.5056-10.1376 2.048-20.3776 3.584-10.24 1.536-20.5824 2.56-10.3424 1.024-20.6848 1.536-10.3424 0.4608-20.736 0.4608t-20.736-0.512q-10.3424-0.512-20.6848-1.536-10.2912-1.024-20.5824-2.56-10.24-1.4848-20.4288-3.5328-10.1376-1.9968-20.224-4.5056-10.0352-2.56-19.968-5.5296-9.9328-3.0208-19.6608-6.5024-9.7792-3.5328-19.3536-7.4752-9.5744-3.9936-18.944-8.3968-9.3696-4.4544-18.5344-9.3184-9.1648-4.9152-18.0224-10.24-8.9088-5.3248-17.5104-11.0592-8.6528-5.7856-16.9984-11.9296-8.2944-6.1952-16.3328-12.8-7.9872-6.5536-15.6672-13.5168t-15.0528-14.336q-7.3216-7.3216-14.2848-15.0016-6.9632-7.68-13.5168-15.6672-6.6048-8.0384-12.8-16.384-6.144-8.2944-11.9296-16.896-5.7344-8.6528-11.0592-17.5616-5.3248-8.8576-10.24-18.0224-4.864-9.1648-9.3184-18.5344t-8.3968-18.944q-3.9936-9.5744-7.4752-19.3536-3.4816-9.728-6.5024-19.6608t-5.5296-19.968q-2.5088-10.0864-4.5056-20.2752-2.048-10.1376-3.584-20.3776-1.536-10.24-2.56-20.5824-1.024-10.3424-1.536-20.6848-0.4608-10.3424-0.4608-20.736t0.512-20.736q0.512-10.3424 1.536-20.6848 1.024-10.2912 2.56-20.5824 1.4848-10.24 3.5328-20.4288 1.9968-10.1376 4.5056-20.224 2.56-10.0352 5.5296-19.968 3.0208-9.9328 6.5024-19.6608 3.4816-9.7792 7.4752-19.3536 3.9424-9.5744 8.3968-18.944 4.4544-9.3696 9.3184-18.5344 4.9152-9.1648 10.24-18.0224 5.3248-8.9088 11.0592-17.5104 5.7856-8.6528 11.9808-16.9984 6.144-8.2944 12.7488-16.3328 6.5536-7.9872 13.5168-15.6672t14.336-15.0528q7.3216-7.3216 15.0016-14.2848 7.68-6.9632 15.6672-13.5168 8.0384-6.6048 16.384-12.8 8.2944-6.144 16.896-11.9296 8.6528-5.7344 17.5616-11.0592 8.8576-5.3248 18.0224-10.24 9.1648-4.864 18.5344-9.3184t18.944-8.3968q9.5744-3.9936 19.3536-7.4752 9.728-3.4816 19.6608-6.5024t19.968-5.5296q10.0864-2.5088 20.224-4.5056 10.24-2.048 20.48-3.584 10.24-1.536 20.5312-2.56 10.3424-1.024 20.6848-1.536 10.3424-0.4608 20.736-0.4608t20.736 0.512q10.3424 0.512 20.6848 1.536 10.2912 1.024 20.5824 2.56 10.24 1.4848 20.4288 3.5328 10.1376 1.9968 20.224 4.5056 10.0352 2.56 19.968 5.5296 9.9328 3.0208 19.6608 6.5024 9.7792 3.4816 19.3536 7.4752 9.5744 3.9424 18.944 8.3968 9.3696 4.4544 18.5344 9.3184 9.1648 4.9152 18.0224 10.24 8.9088 5.3248 17.5616 11.0592 8.6016 5.7856 16.896 11.9808 8.3456 6.144 16.384 12.7488 7.9872 6.5536 15.6672 13.5168t15.0528 14.336q7.3216 7.3216 14.2848 15.0016 6.9632 7.68 13.5168 15.6672 6.6048 8.0384 12.8 16.384 6.144 8.2944 11.9296 16.896 5.7344 8.6528 11.0592 17.5616 5.3248 8.8576 10.24 18.0224 4.864 9.1648 9.3184 18.5344t8.3968 18.944q3.9936 9.5744 7.4752 19.3536 3.4816 9.728 6.5024 19.6608 2.9696 9.9328 5.5296 19.968 2.5088 10.0864 4.5056 20.224 2.048 10.24 3.584 20.48 1.536 10.24 2.56 20.5312 1.024 10.3424 1.536 20.6848 0.4608 10.3424 0.4608 20.736z" fill="#C71D23" p-id="2203"></path><path d="M725.8112 465.1008H485.888a20.8896 20.8896 0 0 0-20.8896 20.8384v52.1216c0 11.52 9.3184 20.8896 20.8384 20.8896h146.0736c11.52 0 20.8384 9.3184 20.8384 20.8384v10.4448c0 34.56-28.0064 62.5664-62.5664 62.5664h-198.144a20.8384 20.8384 0 0 1-20.8896-20.8384v-198.144c0-34.6112 28.0064-62.6176 62.5664-62.6176h291.9936a20.8896 20.8896 0 0 0 20.8384-20.8384l0.0512-52.1728a20.8384 20.8384 0 0 0-20.8384-20.8384H433.7664a156.4672 156.4672 0 0 0-156.416 156.4672v291.9936c0 11.52 9.3184 20.8384 20.8384 20.8384h307.712a140.8 140.8 0 0 0 140.8-140.8V485.9392a20.8384 20.8384 0 0 0-20.8896-20.8384z" fill="#FFFFFF" p-id="2204"></path></svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>

<style scoped>
.TeamMember {
  position: relative;
  background-color: var(--vp-c-bg-soft);
  transition:
    all 0.5s,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.TeamMember:hover {
  transform: translate3d(0, -4px, 0);
  box-shadow: var(--vp-shadow-1);
}

@media (min-width: 512px) {
  .TeamMember {
    display: flex;
  }
}

@media (min-width: 640px) {
  .TeamMember {
    border-radius: 8px;
  }
}

.sponsor {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  border: 1px solid #fd1d7c;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 500;
  color: #fd1d7c;
  transition:
    color 0.25s,
    background-color 0.25s;
}

.sponsor:hover {
  color: var(--vp-c-white);
  background-color: #fd1d7c;
}

.sponsor-icon {
  margin-right: 6px;
  width: 14px;
  height: 14px;
  fill: currentColor;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.avatar {
  flex-shrink: 0;
  padding: 32px 32px 0;
}

@media (min-width: 512px) {
  .avatar {
    padding: 32px 0 0 32px;
  }
}

.avatar-img {
  border-radius: 50%;
  width: 96px;
  height: 96px;
  background-color: var(--vp-c-mute-dark);
  transform: translateX(-8px);
}

.avatar-img .skeleton {
  animation: skeleton--flashed 2s linear 2s infinite;
}

@media (min-width: 512px) {
  .avatar-img {
    width: 80px;
    height: 80px;
    transform: translateX(0);
  }
}

.data {
  padding: 20px 32px 32px;
}

@media (min-width: 512px) {
  .data {
    padding: 40px 32px 32px 32px;
  }
}

.name {
  font-size: 20px;
  font-weight: 500;
}

.org {
  padding-top: 4px;
  line-height: 20px;
  max-width: 320px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}

.company {
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.company.link:hover {
  color: var(--vp-c-brand);
  transition: color 0.5s;
}

.profiles {
  padding-top: 16px;
}

.desc {
  display: flex;
}

.desc + .desc {
  padding-top: 12px;
}

.desc-title {
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  padding-right: 12px;
  height: 20px;
}

.desc-icon {
  width: 16px;
  height: 16px;
  fill: var(--vp-c-text-2);
  transition: fill 0.25s;
}

.desc-icon.code {
  transform: translateY(1px);
}

.desc-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
}

.desc-item {
  padding: 0 4px;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.5s;
}

.desc-item::after {
  margin-left: 8px;
  content: '•';
  color: var(--vp-c-text-3);
  transition: color 0.25s;
}

.desc-item:last-child::after {
  display: none;
}

.desc-text {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.desc-link {
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand);
  transition: color 0.25s;
}

.desc-link:hover {
  color: var(--vp-c-brand-dark);
}

.social-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  padding-top: 16px;
}

.social-item + .social-item {
  padding-left: 8px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.social-link:hover {
  color: var(--vp-c-text-1);
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

@keyframes skeleton--gradient {
  0% {
    transform: translate(-100%) skew(-15deg);
  }

  to {
    transform: translate(100%) skew(-15deg);
  }
}

@keyframes skeleton--flashed {
  0% {
    opacity: 1;
  }

  50% {
    background-color: #e6e6e64d;
    opacity: 0.3;
  }

  to {
    opacity: 1;
  }
}
</style>
