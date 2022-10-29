<template>
    <!-- <aside class="side-bar"> -->
      <div class="side-bar">
        <div class="side-bar-header d-flex flex-column mx-auto w-290">
          <img src="@/assets/images/logo.svg" alt="" />
          <span class="logo">Chameleon</span>
        </div>
        <ul class="list-wrapper">
          <li class="d-flex justify-center" @click="$router.push('/')" :class="$route.path == '/'? 'active' : ''">
            <div class="d-flex w-290 mx-auto">
              <img src="@/assets/images/database.svg" alt="" />
              <a>Open Data Library</a>
            </div>
          </li>
          <li class="d-flex justify-center" @click="$router.push('/contribution')" :class="$route.path == '/contribution'? 'active' : ''">
            <div class="d-flex w-290 mx-auto">
              <img src="@/assets/images/cloud.png" alt="" />
              <a>Data Contribution</a>
            </div>
          </li>
          <li class="d-flex justify-center" @click="$router.push('/bacalhau')" :class="$route.path == '/bacalhau'? 'active' : ''">
            <div class="d-flex w-290 mx-auto">
              <img src="@/assets/images/cod.svg" alt="" />
              <a>Bacalhau COD</a>
            </div>
          </li>
          <li class="d-flex justify-center" @click="$router.push('/manager')" :class="$route.path == '/manager'? 'active' : ''">
            <div class="d-flex w-290 mx-auto">
              <img src="@/assets/images/data_manager.png" alt="" />
              <a>Data Manager</a>
            </div>
          </li>
          <li class="d-flex justify-center" @click="$router.push('/configuration')" :class="$route.path == '/configuration'? 'active' : ''">
            <div class="d-flex w-290 mx-auto">
              <img src="@/assets/images/setting.svg" style="stroke: #000;" />
              <a>IPFS Configuration</a>
            </div>
          </li>
        </ul>
      </div>
    <!-- </aside> -->
</template>
<script></script>
<style lang="scss" scoped>
ul.list-wrapper {
  text-decoration: none;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

ul li {
  list-style: none;
  cursor: pointer;
  height: 54px;
  padding: 0px;
  // width: 296px;
  width: 100%;
  margin: 0px auto;
  border-radius: 3px;
  &:hover {
    color: var(--white);
    background: var(--primary);
  }
}

ul li a {
  text-decoration: none;
  color: var(--dark);
}


ul li img {
  padding-right: 10px;
}
.active {
    color: var(--white);
    background: var(--primary);
    a {
      color: var(--white);
    }
}
</style>