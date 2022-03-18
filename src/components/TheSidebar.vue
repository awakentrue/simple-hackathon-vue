<template>
  <div class="box">
    <UiSidebar class="m-2">
      <UiSidebarItem to="/" name="Home" icon="home" />
      <UiSidebarItem to="/profile" name="Profile" icon="user" />
      <UiSidebarItem to="/messages" name="Messages" icon="envelope" />
      <UiSidebarItem to="/settings" name="Settings" icon="cogs" />
    </UiSidebar>
  </div>
</template>

<script>
import UiSidebar from "@/components/ui/sidebar/UiSidebar";
import UiSidebarItem from "@/components/ui/sidebar/UiSidebarItem";

export default {
  name: "TheSidebar",
  components: { UiSidebar, UiSidebarItem },
};
</script>
