<!DOCTYPE html>
<template>
<div class="wrapper container-fluid">
  <div class="jumbotron">
    <h1 class="col-md-3 col-md-offset-0.5">Homepage</h1>
    <button type="button" class="btn btn-default col-md-offset-7">Add New Memo</button>
  </div>
  <hr>
  <div id="v-for-object" class="memo-ctn">
      <div v-for="value in object" class="memo-box">
       {{ value }}
    </div>
  </div>
</div>
</template>
<script>

export default {
  name: 'about',
  data: function () {
    return {
      object: {
        memo1: 'Note',
        memo2: 'Report',
        memo3: 'Dairy',
        memo4: 'Essay'
      }
    }
  }
}
</script>
<style>
h1 {
  font-weight: normal;
}
hr {
  visibility: hidden;
}
.wrapper {
  width: 100%;
  height: 100%;
}
.wrapper.container-fluid {
  padding-left: 0px;
  padding-right: 0px;
}
.jumbotron {
  display: flex;
  align-items: center;
  background-color: #202126;
}
.memo-ctn {
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;
  padding: 30px;
  height: 100%;
}
.memo-box {
  margin: 10px;
  width: 250px;
  height: 250px;
  background-color: #367060;
}
</style>
