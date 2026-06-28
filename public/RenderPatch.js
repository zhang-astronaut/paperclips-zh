/**
 * RenderPatch.js - 渲染性能优化补丁
 * 为 buttonUpdate/updateStats/renderStockList 添加脏检查机制，
 * 避免每帧无意义的 DOM 操作导致的 UI 闪烁。
 */

// ============ 通用脏检查工具 ============

// 缓存 display 状态，只在值变化时才修改 DOM
var _displayCache = {};

function smartDisplay(element, show) {
  if (!element) return;
  var id = element.id;
  var newVal = show ? "" : "none";
  if (!_displayCache[id] || _displayCache[id] !== newVal) {
    _displayCache[id] = newVal;
    element.style.display = newVal;
  }
}

// 缓存 innerHTML，只在值变化时才修改 DOM
var _htmlCache = {};

function smartHtml(element, value) {
  if (!element) return;
  var id = element.id;
  if (!_htmlCache[id] || _htmlCache[id] !== value) {
    _htmlCache[id] = value;
    element.innerHTML = value;
  }
}

// ============ 为 style.display 添加脏检查 ============
// 覆盖 buttonUpdate() 中频繁切换的 display 操作

(function patchButtonUpdate() {
  var orig = buttonUpdate;
  buttonUpdate = function() {
    // swarmEngine + swarmGift
    smartDisplay(swarmEngineElement, swarmFlag != 0);
    smartDisplay(swarmGiftDivElement, swarmFlag != 0);

    // powerDiv
    smartDisplay(powerDivElement, project127 && project127.flag == 1 && spaceFlag == 0);

    // mpdsDiv
    if (spaceFlag == 0) {
      smartDisplay(mpdsDivElement, false);
    } else if (spaceFlag == 1) {
      smartDisplay(mpdsDivElement, true);
    }

    // swarm slider
    smartDisplay(swarmSliderDivElement, swarmFlag == 1);

    // autoTourney
    smartDisplay(autoTourneyStatusDivElement, autoTourneyFlag == 1);
    smartDisplay(autoTourneyControlElement, autoTourneyFlag == 1);

    // wireBuyer
    smartDisplay(wireBuyerDivElement, wireBuyerFlag == 1);

    // honor / increaseMaxTrust
    smartDisplay(increaseMaxTrustDivElement, project121 && project121.flag != 0);
    smartDisplay(honorDivElement, project121 && project121.flag != 0);

    // drifter / battle canvas
    smartDisplay(drifterDivElement, battleFlag != 0);

    // combat button
    smartDisplay(combatButtonDivElement, combatButtonFlag == 1);

    // hazard/drift/combat body count
    smartDisplay(hazardBodyCountElement, hazardBodyCountFlag == 1);
    smartDisplay(driftBodyCountElement, driftBodyCountFlag == 1);
    smartDisplay(combatBodyCountElement, combatBodyCountFlag == 1);

    // prestige div (在 logic.js refresh 中也有控制，这里保持一致)
    smartDisplay(prestigeDivElement, prestigeU >= 1 || prestigeS >= 1);

    // humanFlag 相关的 display 切换
    if (humanFlag === 0) {
      smartDisplay(businessDivElement, false);
      smartDisplay(manufacturingDivElement, false);
      smartDisplay(trustDivElement, false);
      smartDisplay(creationDivElement, true);
    } else {
      smartDisplay(businessDivElement, true);
      smartDisplay(manufacturingDivElement, true);
      smartDisplay(trustDivElement, true);
      smartDisplay(creationDivElement, false);
    }

    // investment engine
    smartDisplay(investmentEngineElement, investmentEngineFlag == 1);

    // strategy engine
    smartDisplay(strategyEngineElement, strategyEngineFlag == 1);

    // megaClipper
    smartDisplay(megaClipperDivElement, megaClipperFlag == 1);

    // autoClipper
    smartDisplay(autoClipperDivElement, autoClipperFlag == 1);

    // revPerSec
    smartDisplay(revPerSecDivElement, revPerSecDivFlag == 1);

    // comp div (trust + creativity section)
    smartDisplay(compDivElement, humanFlag == 1 || project128 != undefined);

    // creativity
    smartDisplay(creativityDivElement, creativityFlag == 1);

    // projects
    smartDisplay(projectsDivElement, projectFlag == 1);

    // factory / wire production sections
    smartDisplay(factoryDivElement, factoryFlag == 1);
    smartDisplay(wireProductionDivElement, wireProductionFlag == 1);
    smartDisplay(harvesterDivElement, harvesterFlag == 1);
    smartDisplay(wireDroneDivElement, wireDroneFlag == 1);
    smartDisplay(tothDivElement, tothFlag == 1);
    smartDisplay(spaceDivElement, spaceFlag == 1);

    // factory/done upgrade display
    smartDisplay(factoryUpgradeDisplayElement, factoryUpgradeDisplayFlag == 1);
    smartDisplay(droneUpgradeDisplayElement, droneUpgradeDisplayFlag == 1);

    // quantum computing
    smartDisplay(qComputingElement, qComputingFlag == 1);

    // QFade
    qCompDisplayElement.style.opacity = qFade;
    qFade = qFade - .001;

    // autoTourney timer (保留原始逻辑)
    if (resultsFlag == 1 && autoTourneyFlag == 1 && autoTourneyStatus == 1 && tournamentResultsTableElement && tournamentResultsTableElement.style.display == "") {
      resultsTimer++;
      if (resultsTimer >= 300 && operations >= tourneyCost) {
        newTourney();
        runTourney();
        resultsTimer = 0;
      }
    }

    // tooltip innerHTML (用 smartHtml 避免闪烁)
    smartHtml(factoryRebootToolTipElement, "+" + spellf(factoryBill) + " 回形针");
    smartHtml(havesterRebootToolTipElement, "+" + spellf(harvesterBill) + " 回形针");
    smartHtml(wireDroneRebootToolTipElement, "+" + spellf(wireDroneBill) + " 回形针");
    smartHtml(farmRebootToolTipElement, "+" + spellf(farmBill) + " 回形针");
    smartHtml(batteryRebootToolTipElement, "+" + spellf(batteryBill) + " 回形针");

    smartHtml(clipCountCrunchedElement, spellf(Math.round(clips)));

    // mouseover/out 事件绑定 (原始逻辑)
    if (tournamentStuffElement) {
      tournamentStuffElement.onmouseover = function() { revealGrid(); };
      tournamentStuffElement.onmouseout = function() { revealResults(); };
    }
  };
})();

// ============ 为 updateStats 添加脏检查 ============

(function patchUpdateStats() {
  var orig = updateStats;
  updateStats = function() {
    // wire inch span
    if (wire === 1) {
      smartHtml(inchSpanElement, "英寸");
    } else if (inchSpanElement) {
      smartHtml(inchSpanElement, "英寸");
    }

    // clips display (milestone/dismantle 逻辑保持原样)
    if (milestoneFlag < 15) {
      smartHtml(clipsElement, formatWithCommas(Math.ceil(clips), 0));
    }
    if (milestoneFlag === 15 && dismantle == 0) {
      smartHtml(clipsElement, "29,999,999,999,999,900,000,000,000,000,000,000,000,000,000,000,000,000,000");
      smartHtml(clipCountCrunchedElement, "29.9 十秭");
    }
    if (dismantle === 1) {
      smartHtml(clipsElement, "29,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000,000,000,000");
      smartHtml(clipCountCrunchedElement, "29.9 十秭");
    }
    if (dismantle === 2) {
      smartHtml(clipsElement, "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,000,000,000");
      smartHtml(clipCountCrunchedElement, "29.9 十秭");
    }
    if (dismantle === 3) {
      smartHtml(clipsElement, "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,900");
      smartHtml(clipCountCrunchedElement, "29.9 十秭");
    }
    if (dismantle >= 4) {
      if (finalClips < 10) {
        smartHtml(clipsElement, "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999," + "90" + finalClips);
        smartHtml(clipCountCrunchedElement, "29.9 十秭");
      } else if (finalClips > 9 && finalClips < 100) {
        smartHtml(clipsElement, "29,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999,999," + "9" + finalClips);
        smartHtml(clipCountCrunchedElement, "29.9 十秭");
      } else if (finalClips === 100) {
        smartHtml(clipsElement, "30,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000");
        smartHtml(clipCountCrunchedElement, "30.0 十秭");
      }
    }

    // stats innerHTML (用 smartHtml 减少不必要的 DOM 更新)
    smartHtml(clipmakerRateElement, formatWithCommas(Math.round(clipRate)));
    if (humanFlag === 1) {
      smartHtml(clipmakerRate2Element, formatWithCommas(clipRate));
    } else {
      smartHtml(clipmakerRate2Element, spellf(clipRate));
    }
    smartHtml(nanoWireElement, spellf(wire));
    smartHtml(fundsElement, formatWithCommas(funds, 2));
    smartHtml(unsoldClipsElement, formatWithCommas(unsoldClips, 0));
    smartHtml(demandElement, formatWithCommas(demand * 10, 0));
    smartHtml(operationsElement, formatWithCommas(operations));
    smartHtml(trustElement, formatWithCommas(trust));
    smartHtml(nextTrustElement, formatWithCommas(Math.floor(nextTrust)));
    if (creativityOn && creativityElement) {
      smartHtml(creativityElement, formatWithCommas(creativity));
    }
    smartHtml(factoryLevelDisplaySpaceElement, spellf(factoryLevel));
    smartHtml(harvesterLevelSpaceElement, spellf(harvesterLevel));
    smartHtml(wireDroneLevelSpaceElement, spellf(wireDroneLevel));
    smartHtml(maxOpsElement, formatWithCommas((memory * 1000)));
  };
})();

// ============ 为 renderStockList 添加脏检查 ============

(function patchRenderStockList() {
  var orig = renderStockList;
  renderStockList = function() {
    if (!stockSymbolElements || stockSymbolElements.length === 0) return;
    orig();
  };
})();
