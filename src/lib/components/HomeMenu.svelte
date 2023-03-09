<script>
    import { fade } from 'svelte/transition';
    export let toggleFinPro;
    export let toggleLegDoc;
</script>
<style>
    .homemenu {
        @apply flex flex-col items-center justify-center h-fit w-fit;
    }
    .homemenu button {
        @apply rounded-full px-6 py-2.5 min-w-[15rem] mb-4;
        background: linear-gradient(111.98deg, #00b8ff 18.07%, #1574c4 90.31%);
    }
    .homemenu button:last-of-type {
        @apply mb-0;
    }
    .homemenu button span {
        @apply text-white;
    }
</style>


<div class="homemenu" in:fade>
    <button on:click={toggleFinPro}>
        <span>Financial Projections</span>
    </button>
    <button on:click={toggleLegDoc}>
        <span>Legal Documents</span>
    </button>
    <button>
        <span>Market Analysis</span>
    </button>
</div>