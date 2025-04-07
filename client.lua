local function updateUIData()
    local playerId = GetPlayerServerId(PlayerId())
    local playerCount = #GetActivePlayers()

    SendNUIMessage({
        action = "updateData",
        playerId = playerId,
        playerCount = playerCount
    })
end

AddEventHandler('playerSpawned', function()
    Citizen.Wait(1000)
    updateUIData()
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(1000)
        updateUIData()
    end
end)

RegisterCommand("hideui", function()
    SendNUIMessage({
        action = "hideUI"
    })
    SetNuiFocus(false, false)
end, false)

RegisterCommand("showui", function()
    updateUIData()
    SetNuiFocus(false, false)
end, false)