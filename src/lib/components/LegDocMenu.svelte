<script>
    import { fade } from 'svelte/transition';
    import { show_riders_contract, show_drivers_contract } from '../../stores/store'
    export let toggleLegDoc;
    export let toggleRidersContractFN;
    export let toggleDriversContractFN;
</script>
<style>
    .legdocmenu {
        @apply relative flex flex-col items-center justify-center h-fit w-fit p-20;
    }
    .legdocmenuwrapper button {
        @apply rounded-full px-6 py-2.5 min-w-[15rem] mb-4;
        background: linear-gradient(111.98deg, #00b8ff 18.07%, #1574c4 90.31%);
    }
    .legdocmenu button:last-of-type {
        @apply mb-0;
    }
    .legdocmenuwrapper button span {
        @apply text-white;
    }
    .legdocmenu .backBtn {
        @apply absolute left-0;
    }
</style>


<div class="legdocmenuwrapper" in:fade>
    {#if $show_riders_contract}
        <button in:fade on:click={toggleRidersContractFN}>
            <span>Close</span>
        </button>
    {:else if $show_drivers_contract}
        <button in:fade on:click={toggleDriversContractFN}>
            <span>Close</span>
        </button>
    {:else}
        <div class="legdocmenu" in:fade> 
            <div class="backBtn" on:click={toggleLegDoc}>
                <img class="backBtnImg" src="/images/back_btn.png" alt="back arrow image" />
            </div>
            <button on:click={toggleRidersContractFN}>
                <span>Riders Contract</span>
            </button>
            <button on:click={toggleDriversContractFN}>
                <span>Drivers Contract</span>
            </button>
        </div>
    {/if}
</div>