<template lang="pug">
EntityDetail(
  :serviceName="serviceName"
  :entityName="entityName"
  :entityId="entityId"
  :passedEntity="passedEntity"
  :isShort="isShort"
)
  template(v-slot="{entity}")
    section(v-bind:class="[{ short: isShort, notShort: !isShort }]").entityData
      img(
        :src="entity.thumbnail.path + '.' + entity.thumbnail.extension"
        id="thumbnail"
      )
      p(id="name")
        span {{ entity.name }}
    section(v-if="!isShort")
      label Description :
      p {{ entity.description }}
</template>

<script>
import EntityDetail from "@/components/EntityDetail";
import Enum from "@/enums/EnumServices";
import detailMixin from "@/mixins/detailMixin";

export default {
  name: "CharacterDetail",
  components: { EntityDetail },
  mixins: [detailMixin],
  data() {
    return {
      serviceName: Enum.CHARACTERS,
      entityName: "Character"
    };
  }
};
</script>

<style scoped lang="scss">
#mainData {
  display: flex;
  align-items: center;
  justify-content: center;
}
#name {
  margin-left: 10px;
  font-weight: bold;
}
#name span {
  vertical-align: middle;
  display: table-cell;
}
.notShort #name span,
.notShort #thumbnail {
  height: 300px;
  font-size: 2em;
}
</style>
