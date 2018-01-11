<template>
  <Row class="layout-header">
    <Menu ref="menu" mode="horizontal" :theme="headerInfo.theme" :active-name="activeNav" @on-select="selectNav">
      <Col :xs="18" :sm="4">
      <div class="layout-logo">
        <img @click='backindex' :src="headerInfo.logo" alt="">
      </div>
      </Col>
      <Col :xs="0" :sm="20" class="layout-nav-right">
      <div class="layout-nav">
        <MenuItem v-for="(item, index) in headerInfo.nav" :key="index" :name="item.path"> {{ item.name }}
        </MenuItem>
      </div>
      </Col>
      <Col :xs="6" :sm="0" class="layout-nav-right">
      <div class="layout-nav">
        <Submenu name="">
          <template slot="title">
            导航
          </template>
          <MenuItem v-for="(item, index) in headerInfo.nav" :key="index" :name="item.path"> {{ item.name }}
          </MenuItem>
        </Submenu>
      </div>
      </Col>
    </Menu>
  </Row>
</template>

<script>
export default {
  props: ['header', 'active'],
  data() {
    return {
      headerInfo: this.header,
      activeNav: this.active
    }
  },
  created() {
    this.headerInfo.nav.sort(this.sortNav)
  },
  methods: {
    backindex() {
      this.$router.push('/')
      this.$refs.menu.currentActiveName = '/'
    },
    sortNav(a, b) {
      return a.sort - b.sort
    },
    selectNav(name) {
      this.$router.push(name)
    }
  }
}
</script>

<style lang="stylus" scoped>
.layout-header {
  max-width: 1300px;
  margin: 0 auto;
}

.layout-logo {
  height: 50px;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 20px;
}

.layout-logo img {
  height: 100%;
  cursor: pointer;
}

.layout-nav {
  float: right;
}

.ivu-menu-submenu-title-icon {
  display: none;
}

.ivu-menu-dark, .ivu-menu-light, .ivu-menu-primary {
  background: none;
}

.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}

.ivu-menu-item {
  font-size: 16px;
}
</style>
