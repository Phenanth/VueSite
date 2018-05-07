<!DOCTYPE html>
<!DOCTYPE html>
<template>
<div class="rt-ctn">
  <h1 class="login-title">Login</h1>
  <section class="content">
		<span class="input input--minoru">
			<input class="input__field input__field--minoru" type="text" id="input-13" />
			<label class="input__label input__label--minoru" for="input-13">
				<span class="input__label-content input__label-content--minoru">Username</span>
			</label>
		</span>
		<span class="input input--minoru">
			<input class="input__field input__field--minoru" type="text" id="input-14" />
			<label class="input__label input__label--minoru" for="input-14">
				<span class="input__label-content input__label-content--minoru">Password</span>
			</label>
		</span>
	</section>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>

/* .ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rt-ctn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hd {
  display: none;
} */
h1 {
  font-weight: normal;
}
.login-title {
  text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0
}


</style>
