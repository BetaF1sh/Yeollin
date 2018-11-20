<template>
	<div>
		<top-menu/>
		<line-chart/>
	</div>
</template>

<script>
import TopMenu from '@/components/TopMenu';
import LineChart from '@/components/LineChart';

export default {
  name: 'Home',
  components: {TopMenu, LineChart},
}
</script>
