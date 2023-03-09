<script>
    import { fade } from 'svelte/transition';
    import { show_balance_sheet, show_cashflow_statement } from '../../stores/store';
    export let toggleFinPro;
    export let toggleBalanceSheetFN;
    export let toggleCashflowStatementFN;
</script>
<style>
    .finpromenu {
        @apply relative flex flex-col items-center justify-center h-fit w-fit p-20;
    }
    .finpromenuwrapper button {
        @apply rounded-full px-6 py-2.5 min-w-[15rem] mb-4;
        background: linear-gradient(111.98deg, #00b8ff 18.07%, #1574c4 90.31%);
    }
    .finpromenu button:last-of-type {
        @apply mb-0;
    }
    .finpromenuwrapper button span {
        @apply text-white;
    }
    .finpromenu .backBtn {
        @apply absolute left-0;
    }
</style>


<div class="finpromenuwrapper" in:fade>
    {#if $show_balance_sheet}
        <button in:fade on:click={toggleBalanceSheetFN}>
            <span>Close</span>
        </button>
    {:else if $show_cashflow_statement}
        <button in:fade on:click={toggleCashflowStatementFN}>
            <span>Close</span>
        </button>
    {:else}
    <div class="finpromenu">
        <div class="backBtn" on:click={toggleFinPro}>
            <img class="backBtnImg" src="/images/back_btn.png" alt="back arrow image" />
        </div>
        <button on:click={toggleBalanceSheetFN}>
            <span>Balance Sheet</span>
        </button>
        <button>
            <span>Income statement</span>
        </button>
        <button on:click={toggleCashflowStatementFN}>
            <span>Cash Flow Statement</span>
        </button>
    </div>
    {/if}
</div>