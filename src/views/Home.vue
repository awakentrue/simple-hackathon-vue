<template>
  <figure class="md:flex rounded-xl p-8 md:p-0">
    <img
      class="w-24 h-24 object-cover md:rounded-md md:w-48 md:h-auto rounded-full mx-auto"
      src="@/assets/photo.jpeg"
      alt=""
      width="1000"
      height="1411" />
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <div>
        <p class="text-lg font-medium text-light-primary dark:text-dark-primary">
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim error inventore nihil, numquam optio quas suscipit vitae! Dicta
          eligendi ipsa minus quas quod! Consectetur ducimus fugiat mollitia nostrum pariatur."
        </p>
      </div>
      <div class="font-medium">
        <div class="text-sky-blue">Demi Taylor</div>
        <div class="text-light-primary dark:text-dark-primary">HR, Saunafolk</div>
      </div>
    </div>
  </figure>
</template>

<script>
export default {
  name: "Home",
};
</script>
