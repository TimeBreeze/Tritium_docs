<script lang="ts">
const shuffleMembers = (members: Member[], pinTheFirstMember = false): void => {
  let offset = pinTheFirstMember ? 1 : 0
  // `i` is between `1` and `length - offset`
  // `j` is between `0` and `length - offset - 1`
  // `offset + i - 1` is between `offset` and `length - 1`
  // `offset + j` is between `offset` and `length - 1`
  let i = members.length - offset
  while (i > 0) {
    const j = Math.floor(Math.random() * i);
    [
      members[offset + i - 1],
      members[offset + j]
    ] = [
      members[offset + j],
      members[offset + i - 1]
    ]
    i--
  }
}
</script>

<script setup lang="ts">
import { VTLink } from '@vue/theme'
import membersCoreData from './members-core.json'
import membersEmeritiData from './members-emeriti.json'
import membersPartnerData from './members-partner.json'
import TeamHero from './TeamHero.vue'
import TeamList from './TeamList.vue'
import type { Member } from './Member'
shuffleMembers(membersCoreData as Member[], true)
shuffleMembers(membersEmeritiData as Member[])
shuffleMembers(membersPartnerData as Member[])
</script>

<template>
  <div class="TeamPage">
    <TeamHero>
      <template #title>关于团队</template>
      <template #lead
        >Tritium的背后是一个基本来自中国的开源社区,他们为Tritium的诞生与维护做出了巨大贡献,以下是部分成员的个人信息
        <span class="nowrap">featured below.</span></template
      >

      <template #action>
        <VTLink
          href="https://github.com/TimeBreeze/Tritium"
          >Learn more about teams</VTLink
        >
      </template>
    </TeamHero>

    <TeamList :members="membersCoreData as Member[]">
      <template #title>核心开发成员</template>
      <template #lead
        >我们感谢chenzyadb的项目开发， 他对CuprumTurbo Schedule的诞生以及上游维护与开发做出了核心贡献.</template
      >
    </TeamList>

    <TeamList :members="membersEmeritiData as Member[]">
      <template #title>社区维护伙伴</template>
      <template #lead
        >区维护伙伴是那些即将维护或分享自定义配置文件的人员，他们积极跟进上游并不断优化体验.乐于积极分享</template
      >
    </TeamList>

    <TeamList :members="membersPartnerData as Member[]">
      <template #title>社区伙伴</template>
      <template #lead
        >社区伙伴是参与到本计划的反馈&测试人员，他们为我们提供了大量的矫正数据.</template
      >
    </TeamList>
  </div>
</template>

<style scoped>
.TeamPage {
  padding-bottom: 16px;
}

@media (min-width: 768px) {
  .TeamPage {
    padding-bottom: 96px;
  }
}

.TeamList + .TeamList {
  padding-top: 64px;
}
</style>
